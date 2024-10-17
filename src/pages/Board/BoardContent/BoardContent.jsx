import Box from "@mui/material/Box";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "~/utils/sort";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import Column from "./ListColumns/Column/Column";
import TrelloCard from "./ListColumns/Column/ListCards/Card/Card";

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
  CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD",
};

function BoardContent({ board }) {
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });
  // Yêu cầu di chuyển chuột thì mới kích hoạt event, fix trương hợp click bị gọi event
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 },
  });
  //Nhấn giữ 250ms va dùng sai cảm ứng  thì mới kích hoạt event
  const touchsSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 500 },
  });
  // const sensors = useSensors(pointerSensor);
  // ưu tiên sử dụng mousesensor và touchsensor để trải nghiệm trên mobile tốt nhất khong bug
  const sensors = useSensors(mouseSensor, touchsSensor);
  const [orderedColumns, setOrderedColumn] = useState([]);
  // cùng 1 thời điểm chỉ có 1 phần tử được kéo, -> xữ lý giữ chổ khi xóa
  const [activeDragItemId, setActiveDragItemId] = useState(null);
  const [activeDragItemStype, setActiveDragItemStype] = useState(null);
  const [activeDragItemData, setActiveDragItemData] = useState(null);

  const handleDragStart = (event) => {
    console.log(event);
    //set dữ liệu kéo
    setActiveDragItemId(event?.active?.id);
    setActiveDragItemStype(
      event?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN
    );
    setActiveDragItemData(event?.active?.data?.current);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    if (active.id != over.id) {
      const oldIndex = orderedColumns.findIndex((c) => c._id === active.id); // tìm vị trí active
      const newIndex = orderedColumns.findIndex((c) => c._id === over.id); // tìm vị trí over

      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex);
      // const dndOrderedColumnIds = dndOrderedColumns.map((c) => c._id);
      // console.log('dndOrderColumn',dndOrderedColumns)
      // console.log('dndOrderColumnIds',dndOrderedColumnIds)
      setOrderedColumn(dndOrderedColumns);

      //set dữ liệu khi thả = null
      setActiveDragItemId(null);
      setActiveDragItemStype(null);
      setActiveDragItemData(null);
    }
  };

  const dropAnimationCustum = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };
  useEffect(() => {
    setOrderedColumn(mapOrder(board?.columns, board?.columnOrderIds, "_id"));
  }, [board]);

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
          width: "100%",
          height: (theme) => theme.trelloCustom.boardContentHeight,
          p: "10px 0",
        }}
      >
        <ListColumns columns={orderedColumns} />
        {/* giữ chổ khi kéo */}
        <DragOverlay dropAnimation={dropAnimationCustum}>
          {!activeDragItemStype && null}
          {activeDragItemStype === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
            <Column column={activeDragItemData} />
          )}
          {activeDragItemStype === ACTIVE_DRAG_ITEM_TYPE.CARD && (
            <TrelloCard card={activeDragItemData} />
          )}
        </DragOverlay>
      </Box>
    </DndContext>
  );
}

export default BoardContent;
