import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const Confirmation = ({
  open,
  handleOpen,
}: {
  open: boolean;
  handleOpen: () => void;
}) => {
  return (
    <div>
      <div>
        <Dialog
          open={open}
          handler={handleOpen}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className="flex flex-col items-center py-[4rem] bg-[#FBFCFE] font-public text-center"
        >
          <DialogHeader
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="text-[3.2rem]"
          >
            Thank You!
          </DialogHeader>
          <DialogBody
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="text-[1.5rem] font-regular"
          >
            Thank you for your interest. A representative from our
            team will be in touch with you shortly.
          </DialogBody>
          <DialogFooter
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
        <button
          className="w-full text-[1.5rem] py-[1.6rem] bg-[#BA4270] text-[#FBFCFE] font-bold px-[2.4rem] rounded-[2.4rem] mt-[1.6rem]  md:mt-0 md:h-full md:top-0 md:right-0 md:px-[2.4rem] md:w-[20rem] xl:hover:bg-[#DA6D97] transition-colors duration-300"
          onClick={handleOpen}
        >
          Got It!
        </button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
};

export default Confirmation;
