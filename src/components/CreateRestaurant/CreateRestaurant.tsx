import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import CloseModalIcon from "../../assets/CloseModalIcon.svg";
import { ToastContainer, toast } from "react-toastify";
import { ErrorMessage, Formik } from "formik";
import { object, string } from "yup";

import { v4 as uuid } from "uuid";
import { RestaurantsType } from "../../types/types";

type Props = {
  onClose: (status?: string) => void;
  headingText?: string;
  modalValue?: RestaurantsType | undefined | null;
};

const CreateRestaurant = ({ onClose, headingText, modalValue }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialValues = {
    name: modalValue?.name || "",
    description: modalValue?.description,
    address: modalValue?.address || "",
    latitude: modalValue?.latitude || "",
    longitude: modalValue?.longitude || "",
  };

  const validationSchema = object({
    name: string().required("Name is required"),
    description: string().required("Description is required"),
    address: string().required("Address is required"),
    latitude: string().required("Latitude is required"),
    longitude: string().required("Longitude is required"),
  });

  const _onSubmitHandler = async (formValues: any) => {
    // setIsLoading(true);
    console.log(formValues);

    // if (headingText === "Edit") {
    //   const res: any = await updateStore({
    //     values,
    //     accessToken,
    //     id: modalValue?.id,
    //   });

    //   if (res?.status === "Success") {
    //     toast.success(res?.message ? res?.message : "Data Updated");
    //     onClose("Success");
    //   } else {
    //     setIsLoading(false);
    //     toast.error(res?.message ? res?.message : "Something went wrong !!",{style: {whiteSpace: "pre-wrap"}} );
    //   }
    // } else {
    //   const res: any = await createStore({
    //     values,
    //     accessToken,
    //   });
    //   if (res?.status === "Success") {
    //     toast.success(res?.message ? res?.message : "Data Inserted");
    //     onClose("Success");
    //   } else {
    //     setIsLoading(false);
    //     toast.error(res?.message ? res?.message : "Something went wrong !!",{style: {whiteSpace: "pre-wrap"}} );
    //   }
    // }
  };

  const formikRef: any = useRef(null);
  const is_disable = headingText === "View" ? true : false;

  return (
    <div className="min-w-[50rem] ">
      {/* name Bar */}
      <div className="px-6 bg-[#FFDBDB] min-h-[4rem] w-full flex items-center justify-between rounded-t-xl ">
        <h1 className=" text-center text-[18px] font-AvenirLTProHeavy">
          {headingText ? headingText : "Create Restaurant"}
        </h1>
        <img
          src={CloseModalIcon}
          onClick={() => onClose("")}
          className="cursor-pointer w-6 h-6"
        />
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={!modalValue && validationSchema}
        onSubmit={(values) => {
          _onSubmitHandler(values);
        }}
        innerRef={formikRef}
      >
        {({ values, errors, setValues, handleChange, touched, handleBlur }) => (
          <div className="px-6 ">
            <div className="grid grid-cols-3 py-3  gap-4">
              {/* Input name */}
              <div className="flex flex-grow flex-col col-span-1">
                <h1 className="text-black font-AvenirLTProHeavy text-[13px]">
                  Restaurants Name <span className="text-red-600">*</span>
                </h1>
                <input
                  disabled={is_disable}
                  name={"name"}
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={`outline-none border-[#A7A1A1]  border-[1px] rounded-md  px-3 py-[.4rem] ${
                    errors.name && touched.name && "border-red-500"
                  }`}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  //@ts-ignore
                  style={{ color: "red" }}
                />
              </div>
              <div className="flex flex-grow flex-col col-span-2">
                <h1 className="text-black font-AvenirLTProHeavy text-[13px]">
                  Description<span className="text-red-600">*</span>
                </h1>

                <input
                  disabled={is_disable}
                  onChange={handleChange}
                  value={values?.description}
                  name={"description"}
                  className={`outline-none border-[#A7A1A1]  w-full border-[1px] rounded-md  px-3 py-[.4rem] flex-grow ${
                    errors.description &&
                    touched.description &&
                    "border-red-500"
                  }`}
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  //@ts-ignore
                  style={{ color: "red" }}
                />
              </div>
              {/* Select Type */}
              <div className=" col-span-3 ">
                <h1 className="text-black font-AvenirLTProHeavy text-[13px]">
                  Restaurant Address <span className="text-red-600">*</span>
                </h1>
                <input
                  disabled={is_disable}
                  onChange={handleChange}
                  value={values.address}
                  name={"address"}
                  className={`outline-none border-[#A7A1A1]  w-full border-[1px] rounded-md  px-3 py-[.4rem] flex-grow ${
                    errors.address && touched.address && "border-red-500"
                  }`}
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  //@ts-ignore
                  style={{ color: "red" }}
                />
              </div>
            </div>

            {/* Lat Long */}
            <div className="grid grid-cols-2 py-3  gap-4">
              <div className="  ">
                <h1 className="text-black font-AvenirLTProHeavy text-[13px]">
                  Latitude<span className="text-red-600">*</span>
                </h1>
                <input
                  type="number"
                  disabled={is_disable}
                  onChange={handleChange}
                  value={values.latitude}
                  name={"latitude"}
                  className={`outline-none border-[#A7A1A1]  w-full border-[1px] rounded-md  px-3 py-[.4rem] flex-grow ${
                    errors.latitude && touched.latitude && "border-red-500"
                  }`}
                />
                <ErrorMessage
                  name="latitude"
                  component="div"
                  //@ts-ignore
                  style={{ color: "red" }}
                />
              </div>
              <div className="">
                <h1 className="text-black font-AvenirLTProHeavy text-[13px]">
                  Longitude<span className="text-red-600">*</span>
                </h1>
                <input
                  type="number"
                  disabled={is_disable}
                  onChange={handleChange}
                  value={values.longitude}
                  name={"longitude"}
                  className={`outline-none border-[#A7A1A1]  w-full border-[1px] rounded-md  px-3 py-[.4rem] flex-grow ${
                    errors.longitude && touched.longitude && "border-red-500"
                  }`}
                />
                <ErrorMessage
                  name={`longitude`}
                  component="div"
                  //@ts-ignore
                  style={{ color: "red" }}
                />
              </div>
            </div>
          </div>
        )}
      </Formik>

      <div className="border-[##C3C3C3] border-t border-[.5px]" />
      <div className="px-6 pb-3 space-x-3 py-3 flex justify-end">
        <button
          onClick={() => onClose()}
          className="px-8 py-1 border-[#000000] border-[1px] rounded-md "
        >
          Cancel
        </button>
        {is_disable ? (
          <button
            onClick={() => onClose()}
            className="px-8 py-1 border-[#000000] border-[1px] rounded-md "
          >
            Close
          </button>
        ) : (
          <Button
            onClick={() => {
              if (!isLoading && formikRef) formikRef.current.submitForm();
            }} // ; _onSubmitHandler()
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
            {isLoading ? (
              <img
                src={"../../assets/loading.png"}
                className="w-6 h-6 animate-spin  "
                alt="loading"
              />
            ) : headingText === "Edit" ? (
              "Update"
            ) : (
              "Save"
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CreateRestaurant;
