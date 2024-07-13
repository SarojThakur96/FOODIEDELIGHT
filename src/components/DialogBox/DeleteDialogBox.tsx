import { Button, Dialog } from "@mui/material";
import DeleteIcon from "../../assets/DeleteIcon.svg";
import { toast } from "react-toastify";

interface Props {
  item: any;
  onClose: (status?: string) => void;
  showDrawer: boolean;
  type: string;
}

const DeleteDialogBOX = (props: Props) => {
  return (
    <Dialog
      open={props?.showDrawer}
      PaperProps={{
        style: { borderRadius: 20 },
      }}
      onClose={() => props?.onClose()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {props?.type === "delete" && (
        <div className="items-center justify-center px-6 py-5 space-y-7">
          <div className="flex space-x-2 ">
            <img src={DeleteIcon} alt="" className="w-10 h-10" />
            <div>
              <h1 className="font-[500] text-black text-xl">
                Do you want to delete store?
              </h1>
            </div>
          </div>

          <div className="w-fll flex  justify-evenly">
            <Button
              onClick={() => props?.onClose()}
              variant="outlined"
              color="inherit"
              style={{
                borderRadius: 8,
                padding: "18px 36px",
                fontSize: "15px",
                // textDecoration:
                textTransform: "none",
                // fontFamily: "AvenirLTProHeavy",
                height: 20,
              }}
            >
              Cancel
            </Button>

            <Button
              onClick={async () => {
                // const res = await deleteStore({
                //   accessToken,
                //   id: props?.item.id,
                // });
                // if (res?.status === "Success") {
                //   toast.success(res?.message || "Brand deleted.");
                //   props?.onClose("Success");
                // } else {
                //   toast.error(res?.message || "Brand deleted failed.",{style: {whiteSpace: "pre-wrap"}} );
                //   props?.onClose();
                // }
              }}
              variant="contained"
              color="primary"
              style={{
                borderRadius: 8,
                backgroundColor: "#000",
                padding: "18px 36px",
                fontSize: "15px",
                // textDecoration:
                textTransform: "none",
                // fontFamily: "AvenirLTProHeavy",
                height: 20,
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      )}
    </Dialog>
  );
};

export default DeleteDialogBOX;