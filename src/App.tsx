import { TextField } from "common/form";
import { ArrowDownIcon } from "common/icons";
import { Size } from "common/types";
import { Button, ButtonVariant, Shadow } from "common/utilities";
import * as React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Select, SelectOption } from "common/form/Select/Select";

type SexType = "male" | "female" | "others";
type FormData = { username: string; sex: SexType };
const options: SelectOption<SexType>[] = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "others", label: "Others" },
];

const schema = yup.object().shape({
  username: yup.string().required("Required"),
});
interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const methods = useForm<FormData>({
    values: {
      username: "",
      sex: "others",
    },
    resolver: yupResolver(schema),
  });
  const { register, handleSubmit, watch } = methods;
  const submitHandler: SubmitHandler<FormData> = (data) => {
    console.log("xin chao:", data);
  };
  return (
    <div className=" tw-px-32 tw-pb-300">
      <ArrowDownIcon className="text-success-80" />
      <Shadow className="">Whereas recognition of the inherent dign</Shadow>
      <h1>Whereas recognition of the inherent dign</h1>
      <h1 className="tw-font-medium">
        Whereas recognition of the inherent dign
      </h1>
      <h1 className="tw-font-bold">Whereas recognition of the inherent dign</h1>
      <hr />
      <h2>Whereas recognition of the inherent dign</h2>
      <h2 className="tw-font-medium">
        Whereas recognition of the inherent dign
      </h2>
      <h2 className="tw-font-bold">Whereas recognition of the inherent dign</h2>
      <hr />
      <h3>Whereas recognition of the inherent dign</h3>
      <h3 className="tw-font-medium">
        Whereas recognition of the inherent dign
      </h3>
      <h3 className="tw-font-bold">Whereas recognition of the inherent dign</h3>
      <hr />
      <h4>Whereas recognition of the inherent dign</h4>
      <h4 className="tw-font-medium">
        Whereas recognition of the inherent dign
      </h4>
      <h4 className="tw-font-bold">Whereas recognition of the inherent dign</h4>
      <hr />

      <p>Whereas recognition of the inherent dign</p>
      <p className="tw-font-medium">Whereas recognition of the inherent dign</p>
      <p className="tw-font-bold">Whereas recognition of the inherent dign</p>
      <hr />

      <em>Whereas recognition of the inherent dign</em>
      <em className="tw-font-medium">
        Whereas recognition of the inherent dign
      </em>
      <em className="tw-font-bold">Whereas recognition of the inherent dign</em>
      <hr />
      <small>Whereas recognition of the inherent dign</small>
      <small className="tw-font-medium">
        Whereas recognition of the inherent dign
      </small>
      <small className="tw-font-bold">
        Whereas recognition of the inherent dign
      </small>
      <hr />
      <h5>Whereas recognition of the inherent dign</h5>
      <h5 className="tw-font-medium">
        Whereas recognition of the inherent dign
      </h5>
      <h5 className="tw-font-bold">Whereas recognition of the inherent dign</h5>
      <hr />
      <h6>Whereas recognition of the inherent dign</h6>
      <h6 className="tw-font-medium">
        Whereas recognition of the inherent dign
      </h6>
      <h6 className="tw-font-bold">Whereas recognition of the inherent dign</h6>
      <hr />
      <div className="tw-space-y-8">
        {(["primary", "outlined", "secondary", "text"] as ButtonVariant[]).map(
          (variant) => (
            <>
              {[false, true].map((disabled) => (
                <>
                  <h3 className=" tw-font-medium">
                    {variant} {disabled && "disabled"}
                  </h3>
                  <div className="tw-flex tw-gap-8 tw-items-start">
                    {(["sm", "md", "lg"] as Size[]).map((size) => (
                      <Button
                        size={size}
                        variant={variant}
                        leftIcon={<ArrowDownIcon />}
                        rightIcon={<ArrowDownIcon />}
                        disabled={disabled}
                      >
                        Button{` ${size}`}
                      </Button>
                    ))}
                  </div>
                </>
              ))}
            </>
          )
        )}
      </div>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <TextField
            {...register("username")}
            label="Username"
            requireText="*"
            endIcon={<ArrowDownIcon />}
          />
          <br />
          <Select {...register("sex")} options={options} />
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
      {watch("sex")}
    </div>
  );
};

export default App;
