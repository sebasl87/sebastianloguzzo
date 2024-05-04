import styled from "styled-components";
import CheckBox from "../../molecules/CheckBox";

const Layout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: transparent;
  margin-left: ${(props) => props.isNoMobile && "22px"};
  padding-top: ${(props) => props.isNoMobile && "8px"};
`;

export const MenuProjects = ({
  valueFpay,
  valueLandings,
  valueB2C,
  valueLabels,
  valueIndec,
  valueAus,
  valueAuna,
  valueNidit,
  onChangeFpay,
  onChangeLandings,
  onChangeB2C,
  onChangeLabels,
  onChangeIndec,
  onChangeAus,
  onChangeAuna,
  onChangeNidit,
  valueColombia,
  onChangeColombia,
  valueHop,
  onChangeHop,
  valueClara,
  onChangeClara,
  valueCustom,
  onChangeCustom,
  valueKualiti,
  onChangeKualiti,
  valueDanone,
  onChangeDanone,
  isNoMobile,
}) => {
  return (
    <Layout isNoMobile={isNoMobile}>
      <CheckBox
        label="Portal Fpay - Falabella"
        value={valueFpay}
        checked={valueFpay}
        onChange={onChangeFpay}
      />
      <CheckBox
        label="Landings - Skydropx"
        value={valueLandings}
        checked={valueLandings}
        onChange={onChangeLandings}
      />
      <CheckBox
        label="B2C - Skydropx"
        value={valueB2C}
        checked={valueB2C}
        onChange={onChangeB2C}
      />
      <CheckBox
        label="Labels - Skydropx"
        value={valueLabels}
        checked={valueLabels}
        onChange={onChangeLabels}
      />
      <CheckBox
        label="HomePage - Skydropx"
        value={valueColombia}
        checked={valueColombia}
        onChange={onChangeColombia}
      />
      <CheckBox
        label="aUshuaia.com"
        value={valueAus}
        checked={valueAus}
        onChange={onChangeAus}
      />
      <CheckBox
        label="auna"
        value={valueAuna}
        checked={valueAuna}
        onChange={onChangeAuna}
      />
      <CheckBox
        label="nidit!"
        value={valueNidit}
        checked={valueNidit}
        onChange={onChangeNidit}
      />
      <CheckBox
        label="Hotelop"
        value={valueHop}
        checked={valueHop}
        onChange={onChangeHop}
      />
      <CheckBox
        label="Clara Muzzio - custom-xs"
        value={valueClara}
        checked={valueClara}
        onChange={onChangeClara}
      />
      <CheckBox
        label="custom-xs"
        value={valueCustom}
        checked={valueCustom}
        onChange={onChangeCustom}
      />
      <CheckBox
        label="Grupo Kualiti - custom-xs"
        value={valueKualiti}
        checked={valueKualiti}
        onChange={onChangeKualiti}
      />
      <CheckBox
        label="Danone Mx - B2B"
        value={valueDanone}
        checked={valueDanone}
        onChange={onChangeDanone}
      />
    </Layout>
  );
};

export default MenuProjects;
