export function shift(
  offsetsTarget: { [key: string]: number },
  referenceOffset: { [key: string]: number },
  placement: string
) {
  let offsetsPopper = offsetsTarget;
  const basePlacement = placement.split(' ')[0];
  const shiftvariation = placement.split(' ')[1];

  if (shiftvariation) {
    const isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    const side = isVertical ? 'left' : 'top';
    const measurement = isVertical ? 'width' : 'height';

    const shiftOffsets = {
      left: { [side]: referenceOffset[side] },
      right: {
        [side]: referenceOffset[side] + referenceOffset[measurement] - offsetsPopper[measurement]
      }
    };

    offsetsPopper = { ...offsetsPopper, ...shiftOffsets[shiftvariation] };
  }

  return offsetsPopper;
}
