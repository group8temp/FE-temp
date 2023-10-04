import { MODIFY_PROFILE_INPUT_TEXTS } from "@/constants/modifyprofile";
import { theme } from "@/styles";
import styled from "styled-components";
import { ModifySexIcon } from "../common/svgicon";
import { useState } from "react";

export const ModifySex = ({ formData, setFormData }) => {

  const handleSexClick = (isMale) => {
    setSelectedSex(isMale);
    setFormData({
      ...formData,
      sex: isMale ? "남성" : "여성" 
    });
  };

  const [selectedSex, setSelectedSex] = useState(null);

  return (
    <SexWrap>
      <Category
        onClick={() => handleSexClick(false)}
        selected={selectedSex === false} 
      >
        <ModifySexIcon male={false} strokeColor={selectedSex === false ? theme.main.blueL1 : theme.greyScale.grey5} />
        {MODIFY_PROFILE_INPUT_TEXTS.sexFemaleText}
      </Category>
      <Category
        onClick={() => handleSexClick(true)}
        selected={selectedSex === true} 
      >
        <ModifySexIcon male={true} strokeColor={selectedSex ? theme.main.blueL1 : theme.greyScale.grey5} />
        {MODIFY_PROFILE_INPUT_TEXTS.sexMaleText}
      </Category>
    </SexWrap>
  );
};

const SexWrap = styled.div`
  margin-top: 12px;
  display: flex;
`;

const Category = styled.div`
  box-sizing: border-box;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  border: 1px solid ${(props) => (props.selected ? "white" : theme.greyScale.grey3)};
  color: ${(props) => (props.selected ? theme.main.blueL1 : "black")};
  background-color: ${(props) =>
    props.selected ? theme.greyScale.blie : "white"};
  padding: 12px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 21px;
  cursor: pointer;
  svg {
    margin-right: 4px;
    stroke: ${(props) => (props.selected ? "white" : theme.greyScale.blueGrey)};
  }
`
