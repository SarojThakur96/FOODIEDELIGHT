import React, { useEffect } from "react";
import CustomGrid from "../../components/CustomGrid/CustomGrid";
import { Spinner } from "react-activity";
import { Tooltip } from "@mui/material";
import { getAllRestaurants } from "../../api/getAllRestaurants";
import { RestaurantsType } from "../../types/types";
import DeleteIcon from "../../assets/DeleteIcon.svg";
import EditIconGrid from "../../assets/EditIconGrid.svg";
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
  const createData = (item: any, index: number) => {
    const Title = (
      <div>
        <h1
          className="underline decoration-blue-[#0061bb] text-[#0061bb] cursor-pointer "
          onClick={() => {
            setModalValue(item);
            setShowModal(true);
            setModalType("edit");
            // View and Edit Modal
          }}
        >
          {item?.title}
        </h1>
      </div>
    );
    const action = (
      <div className="flex space-x-[10px] justify-center ">
        {/* EditIconGrid */}
        <Tooltip title="Edit" placement="bottom">
          <img
            src={EditIconGrid}
            className="cursor-pointer w-4 h-4"
            onClick={() => {
              setModalType("Edit");
              // setModalValue(item);
              setShowModal(true);
            }}
          />
        </Tooltip>
        <Tooltip title="Delete" placement="bottom">
          {/* Call the delete function  */}
          <img
            src={DeleteIcon}
            className="cursor-pointer w-4 h-4"
            onClick={() => {
              setShowDrawer(true);
              setModalType("delete");
              // setModalValue(item);
            }}
          />
        </Tooltip>
      </div>
    );

    return {
      key: item?.id,
      idx: index + 1,
      Brands: item?.brand_name,
      address: item?.address,
      type: item?.loyalty_type_name,

      title: Title,
      action,
      isActive: item?.is_active,
      ...item,
    };
  };

  const rows = [
    ...data?.map((item: any, index: number) => createData(item, index)),
  ];

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
    <div>
      <div className="space-y-4 w-full px-4 relative">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-AvenirLTProHeavy">Restaurants</h1>
          <h1 className="text-sm font-AvenirLTProHeavy text-[#8B8B8B] flex">
            <span className="text-black flex items-center ">
              <div className="w-2 h-2 bg-black rounded-full mx-2" /> Restaurants
            </span>
          </h1>
        </div>

        <div className="w-full flex-grow   border-[1px] border-t-[##D7D4D4] rounded-2xl">
          {isLoading ? (
            <div className="h-32 items-center justify-center flex">
              <Spinner size={20} color="red" />
            </div>
          ) : (
            <CustomGrid
              columns={columns}
              rows={rows}
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
      </div>
    </div>
  );
};

export default Home;
