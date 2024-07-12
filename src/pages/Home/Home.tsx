import React, { useEffect } from "react";
import CustomGrid from "../../components/CustomGrid/CustomGrid";
import { Spinner } from "react-activity";
import { Tooltip } from "@mui/material";
import { getAllRestaurants } from "../../api/getAllRestaurants";
import { RestaurantsType } from "../../types/types";
// import { ReactComponent as DeleteIcon } from "../../assets/DeleteIcon.svg";
// import { ReactComponent as EditIconGrid } from "../../assets/EditIconGrid.svg";
const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState<RestaurantsType[]>([]);
  const [showModal, setShowModal] = React.useState(false);
  const [modalValue, setModalValue] = React.useState(null);
  const [modalType, setModalType] = React.useState("");
  const [showDrawer, setShowDrawer] = React.useState(false);
  const [isLoading, setIsloading] = React.useState(false);
  const [reload, setReload] = React.useState(0);
  const [currentPageInfo, setCurrentPageInfo] = React.useState({
    pageNo: 1,
    itemPerPage: 10,
    totalItem: 10,
  });

  const columns: any[] = [
    { id: "id", label: "Sr. No.", minWidth: 80, align: "left" },
    { id: "name", label: "Name", minWidth: 200, align: "center" },
    { id: "description", label: "Description", minWidth: 300, align: "left" },
    {
      id: "url",
      label: "Hidden Link",
      minWidth: 120,
      align: "left",
    },
    { id: "action", label: "Action", minWidth: 130, align: "center" },
  ];

  // const action = (
  //   <div className="flex space-x-[10px] justify-center ">
  //     {/* EditIconGrid */}
  //     <Tooltip title="Edit" placement="bottom">
  //       <EditIconGrid
  //         className="cursor-pointer w-4 h-4"
  //         onClick={() => {
  //           setModalType("Edit");
  //           // setModalValue(item);
  //           setShowModal(true);
  //         }}
  //       />
  //     </Tooltip>
  //     <Tooltip title="Delete" placement="bottom">
  //       {/* Call the delete function  */}
  //       <DeleteIcon
  //         className="cursor-pointer w-4 h-4"
  //         onClick={() => {
  //           setShowDrawer(true);
  //           setModalType("delete");
  //           // setModalValue(item);
  //         }}
  //       />
  //     </Tooltip>
  //   </div>
  // );

  const gWidth =
    window.screen.height > 864
      ? window.screen.height * 0.4
      : window.screen.height * 0.35;

  const loadRestaurantsData = async () => {
    setIsloading(true);
    try {
      const res = await getAllRestaurants();

      console.log("res", res);
      if (res.status === 200) {
        setData(res.data);
      }
    } catch (error) {
      setIsloading(false);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    loadRestaurantsData();
  }, []);

  return (
    <div className="w-full flex-grow   border-[1px] border-t-[##D7D4D4] rounded-2xl">
      {isLoading ? (
        <div className="h-32 items-center justify-center flex">
          <Spinner size={20} color="red" />
        </div>
      ) : (
        <CustomGrid
          columns={columns}
          rows={data}
          gWidth={gWidth}
          itemPerPage={currentPageInfo.itemPerPage}
          count={currentPageInfo?.totalItem}
          handleChangePageUrUpdate={(e) => {
            setCurrentPageInfo((prev) => ({ ...prev, pageNo: e + 1 }));
            setReload(reload + 1);
          }}
          givenPage={currentPageInfo?.pageNo}
          handlerRowsPerPage={(e) => {
            setCurrentPageInfo((prev) => ({
              ...prev,
              itemPerPage: Number(e),
              pageNo: 1,
            }));
            setReload(reload + 1);
          }}
        />
      )}
    </div>
  );
};

export default Home;
