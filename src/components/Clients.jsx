import React from "react";
import styles from "../style";
import { clients } from "../constants";

const Clients = () => (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        { clients.map((clients) => (
          <div key={clients.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}>
            <img src={clients.logo} alt="clients" className="sm:w-[192px] w-[100px] object-contain"/>
          </div>
        )) }
      </div>
    </section>
  )
export default Clients