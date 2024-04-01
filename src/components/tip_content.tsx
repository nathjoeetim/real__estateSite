import { Card } from "./ui/card";
import { FaHandshake } from "react-icons/fa6";
import { FcCustomerSupport } from "react-icons/fc";
import { AiOutlineSafety } from "react-icons/ai";
import { GiStandingPotion } from "react-icons/gi";

import styled from "styled-components";

function TipContentComponent() {
  return (
    <div className="flex flex-col gap-8 items-start justify-start bg-transparent my-3 rounded-md w-[96%] p-8 mx-auto h-fit">
      <div className="flex flex-row w-full items-center justify-center">
        <h4 className="dark:text-white font-bold font-serif text-3xl max-lg:text-2xl max-md:text-xl text-center">
          World Most Competitive and Secured Housing Agent{" "}
        </h4>
      </div>
      <SubItem className="flex flex-row w-full items-center">
        <div className="flex flex-row items-start justify-start gap-5 w-[50%] item1">
          <div className="w-[80px] h-[80px] rounded-md  bg-violet-700 flex flex-row items-center justify-center">
            <FaHandshake size={50} color="violet" />
          </div>
          <div className="flex flex-col items-start justify-start gap-2 dark:text-white">
            <h4 className="font-semibold text-base">Authenticated Property</h4>
            <ul>
              <li className="list-disc">World Class Anti-Fraud system</li>
              <li className="list-disc">Strict Fair Pol</li>
              <li className="list-disc">Daily Property Update</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-5 ml-8 item2">
          <div className="w-[80px] h-[80px] rounded-md  bg-violet-700 flex flex-row items-center justify-center">
            <AiOutlineSafety size={50} color="violet" />
          </div>
          <div className="flex flex-col items-start justify-start gap-2 dark:text-white">
            <h4 className="font-semibold text-base">100% Safe and Secure</h4>
            <ul className="w-[220px]">
              <li className="list-disc">Complete Data and Identity Privacy</li>
            </ul>
          </div>
        </div>
      </SubItem>
      <SubItem className="flex flex-row w-full items-center">
        <div className="flex flex-row items-start justify-start gap-5 w-[50%] item1">
          <div className="w-[80px] h-[80px] rounded-md  bg-violet-700 flex flex-row items-center justify-center">
            <FcCustomerSupport size={50} color="violet" />
          </div>
          <div className="flex flex-col items-start justify-start gap-2 dark:text-white">
            <h4 className="font-semibold text-base">
              Fastest Customer Support Service
            </h4>
            <ul>
              <li className="list-disc">24x7 In-App Customer</li>
              <li className="list-disc">Queries solved in seconds</li>
              {/* <li className="list-disc">World Class Anti-Fraud system</li> */}
            </ul>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-5  ml-8 item2 ">
          <div className="w-[80px] h-[80px] rounded-md  bg-violet-700 flex flex-row items-center justify-center">
            <GiStandingPotion size={50} color="violet" />
          </div>
          <div className="flex flex-col items-start justify-start gap-2 dark:text-white">
            <h4 className="font-semibold text-base">Property Variants</h4>
            <ul className="w-[220px]">
              <li className="list-disc">No minimum for per user purchase</li>
              <li className="list-disc">World Class Quality Property </li>
              {/* <li className="list-disc">World Class Anti-Fraud system</li> */}
            </ul>
          </div>
        </div>
      </SubItem>
    </div>
  );
}

export default TipContentComponent;

const SubItem = styled.div`
  @media screen and (max-width: 825px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    width: 100%;

    & .item2 {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      margin-left: 0;
    }

    & .item1 {
      width: 100%;
    }
  }
`;
