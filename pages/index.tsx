import * as React from "react";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";
import { changeLanguage } from "../utils/i18n";
import {
  Button,
  TextInput,
  TextArea,
  Checkbox,
  DropdownSelect,
} from "components/common";
import { Headers } from "components/layouts";
import { IAppModel } from "modules/AppModel";
import { appStoreContext } from 'RootStore';
import { ICONS, COLOR } from "../constants";

const Home = () => {
  const appStore: IAppModel = React.useContext(appStoreContext);
  const { t } = useTranslation();

  const [selected, setSelected] = React.useState("");

  return (
    <div>
      <Headers />
      <div className="container mx-auto p-4 bg-white">
        <div className="flex space-x-1 justify-end">
          <Button
            title="TH"
            onClick={() => {
              changeLanguage("th");
            }}
          />
          <Button
            title="EN"
            onClick={() => {
              changeLanguage("en");
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="font-reg text-sm">
            <p>Translation i18n</p>
            <p>{t("title")}</p>
            <p>Current Locale From AppStore = {appStore.appLanguage}</p>
          </div>
          <div>
            <p>Color</p>
            <p>
              Color primary is <a className="text-primary">{COLOR.primary}</a>
            </p>
            <p>
              Color secondaryLight is{" "}
              <a className="text-secondaryLight">{COLOR.secondaryLight}</a>
            </p>
          </div>
          <div>
            <p className="font-reg text-sm">Font</p>
            <p className="font-med text-md">Use Font Medium</p>
            <p className="font-bold text-lg">Use Font Bold</p>
          </div>
          <div className="space-y-2">
            <p>Form</p>
            <TextInput
              placeholder="First Name"
              onChangeText={(value) => {
                console.log(value);
              }}
            />
            <TextInput
              placeholder="Last Name"
              onChangeText={(value) => {
                console.log(value);
              }}
            />
            <TextArea
              placeholder="Address"
              onChangeText={(value) => {
                console.log(value);
              }}
            />
            <DropdownSelect
              placeholder="Select one"
              label="Choose category"
              selected={selected}
              optionsData={[{ label: "ทั้งหมด", value: "1" }, { label: "Shop", value: "2" }]}
              onChange={(selected) => setSelected(selected)}
            />
            <Checkbox
              name="Agree"
              description="Agree to term of services"
              onCheck={(value) => {
                console.log(value);
              }}
            />
          </div>
          <div className="space-y-2">
            <p>Button</p>
            <Button title="SUBMIT" styleClass="w-full" />
            <Button title="Disabled" styleClass="w-full" disabled={true} />
            <Button title="OUTLINE" styleClass="w-full" outline={true} />
            <Button title="DISABLED OUTLINE" styleClass="w-full" outline={true} disabled={true} />
          </div>
          <div>GRID</div>
        </div>
      </div>

      <div className="flex min-h-screen justify-center items-center" style={{ background: COLOR.gradient }}>
        {/* <div className="flex min-h-screen justify-center items-center" style={{ background: COLOR.textInComponent }}> */}
        <div className="container py-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="flex px-12 sm:px-6 items-center justify-center ">
              <div className="flex-shrink-0">
                <div className="hidden lg:block flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-2xl lg:text-3xl font-bold text-black-500">
                  <span className="text-3xl lg:text-4xl">Competitive</span><br />
                  exchange rates
                </dt>
                <dd className="mt-2 text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </dd>
              </div>
            </div>

            <div className="flex px-12 sm:px-6 justify-center">
              <div className="w-72">
                <img src="/assets/images/phone.png" />
              </div>
            </div>
          </dl>
        </div>
      </div>

      {/* <div className="h-screen"></div> */}

    </div>


  );
};

export default observer(Home);