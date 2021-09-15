import React from "react";
import { Link } from "react-router-dom";
import image from "../../../../assets/images/opportunity.png";
import * as icons from "../../../CommonComponents/Icons/Icons";
const OpportunityDetails = () => {
  return (
    <div>
      <h6 className="text-center my-3 greyText">THE OPPORTUNITIES</h6>
      <h1 className="h2 my-3 text-center text-white">
        VIP MEMBER HOTSPOT: ZACK SMITH
      </h1>
      <p className="text-center my-3 greyText">JUNE 28, 2021</p>
      <div>
        <img src={image} width="100%" alt="" />
      </div>
      <div className="my-5">
        <p className="greyText text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, sem
          est mi egestas nunc nunc. Posuere aliquam nulla dolor a. Aliquet proin
          morbi nunc, nisl nulla convallis nec imperdiet. Cras lectus placerat
          nibh sed amet. Pretium, quisque amet, id commodo donec lacus libero.
          Enim nibh proin vel, ullamcorper iaculis. Aliquam lectus maecenas
          ultricies tellus massa tempor arcu leo. Mauris, pretium tempus, vitae
          urna, quam felis egestas. Volutpat id at donec viverra. Nibh etiam
          etiam vel ac. Mauris, quam phasellus turpis amet, consequat lorem
          neque. Tristique ipsum lectus nec nisi, tincidunt. At tincidunt morbi
          risus metus egestas massa gravida ullamcorper in. Ipsum interdum
          adipiscing scelerisque parturient tincidunt bibendum in. Nisl luctus
          diam, facilisis purus. Tincidunt lorem vestibulum, enim, rhoncus ut
          tristique cras integer. Morbi eget montes, semper odio aliquam in
          morbi viverra. Aenean tortor egestas tortor mauris ut fermentum hac
          tortor. Faucibus rhoncus tellus ac viverra velit nibh et sem volutpat.
          Ultricies sit felis a arcu pellentesque commodo, facilisis nisl. Ut
          fusce laoreet imperdiet nam sed diam gravida. Nisi, congue elit
          facilisis fermentum est porttitor. Ultrices pellentesque nisl
          vestibulum facilisi fermentum erat egestas mi. Integer egestas id
          faucibus arcu, eu id. Nullam gravida feugiat convallis fusce eget.
          Lorem laoreet tempus nunc, ullamcorper venenatis magna urna eget id.
          Ac id pellentesque urna fermentum eu. Convallis magna curabitur
          placerat est, bibendum neque ultricies. Tempor dictum faucibus dui
          aliquet mauris sed massa nulla mattis. Lobortis auctor vel elit nunc,
          blandit. Erat eget amet amet enim. Tellus eu porttitor faucibus massa
          faucibus. Nibh feugiat in eleifend arcu sed sed facilisi sem.
          Consequat, massa velit dolor arcu vel justo ac. Congue aliquam gravida
          ac pretium vulputate. Vel diam id mollis tellus in ornare condimentum
          ipsum donec. Arcu cras mi viverra est quis. Sed egestas auctor egestas
          tellus odio vitae, eget iaculis donec. Etiam viverra ligula in
          adipiscing praesent in convallis. Orci enim, et habitant in volutpat
          vulputate lorem. Nisl in consequat, id tellus sit adipiscing eget
          congue. Et elementum habitant faucibus maecenas at nunc id lectus.
          Justo sem augue nisi sodales quis id nisi, cursus duis. Rhoncus cras
          id imperdiet vel morbi quis vitae egestas. Ac scelerisque elit enim
          purus fermentum, viverra risus in natoque. Quisque purus donec
          condimentum vel. Felis, tellus risus amet, non. Libero, mauris libero,
          nisi, proin.
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-between flex-wrap-mobile mb-4 justify-center-mobile">
        <div className="d-flex align-items-center">
          <p className="greyText">Share</p>
          <ul className="d-flex align-items-center">
            <li className="m-2">
              <Link to="#">
                <icons.Twitter />
              </Link>
            </li>
            <li className="m-2">
              <Link to="#">
                <icons.GoogleG />
              </Link>
            </li>
            <li className="m-2">
              <Link to="#">
                <icons.VK />
              </Link>
            </li>
            <li className="m-2">
              <Link to="#">
                <icons.Pintrest />
              </Link>
            </li>
            <li className="m-2">
              <Link to="#">
                <icons.LinkedIn />
              </Link>
            </li>
            <li className="m-2">
              <Link to="#">
                <icons.Facebook />
              </Link>
            </li>
          </ul>
        </div>
        <button className="border-0 bg-black greyText px-4 py-2">
          Apply for this opportunity
        </button>
      </div>
    </div>
  );
};

export default OpportunityDetails;
