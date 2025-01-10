import { Dialog } from "@material-tailwind/react";
import CheckOutForm from "./CheckOutForm";

export default function Payment({
  handleOpen,
  open,
}: {
  open: boolean;
  handleOpen: () => void;
}) {
  return (
    <div>
      <Dialog
        open={open}
        handler={handleOpen}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        className="p-[2rem]"
      >
        <CheckOutForm handleOpen={handleOpen} />
      </Dialog>
    </div>
  );
}
