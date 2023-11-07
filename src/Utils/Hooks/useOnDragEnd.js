// state is array
export default function useOnDragEnd(state, handlerUpdateState) {
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      state,
      result.source.index,
      result.destination.index,
    );

    // pass re-order items
    handlerUpdateState(items);
  };

  return onDragEnd;
}
