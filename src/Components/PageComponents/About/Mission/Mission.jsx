import React from "react";
import * as icons from "../../../CommonComponents/Icons/Icons";
import styles from "./Mission.module.scss";
import image from "../../../../assets/images/building.png";
const Mission = () => {
  return (
    <div className="bg-blue">
      <div className={`container ${styles.container}`}>
        <div className="row">
          <div className="col-md-8">
            <div>
              <div className={`${styles.icon} float-start px-4`}>
                <icons.Mission />
              </div>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                arcu et, penatibus aliquet fusce cras eros, suspendisse
                adipiscing. Cras lectus metus, dictum adipiscing nec nisl ipsum.
                Non mi dolor, mauris felis imperdiet diam mus quam vel. Blandit
                vel amet tristique diam pharetra aliquet aliquet. Justo nulla
                massa bibendum sagittis sollicitudin. Egestas porta turpis
                dignissim porttitor a diam lacus, dignissim. Enim est convallis
                eu facilisi porta. Turpis maecenas fermentum dui dignissim
                ornare. Euismod.
              </p>
            </div>
          </div>
          <div className="col-md-4 position-relative">
            <div className={styles.img}>
              <img src={image} width="100%" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
