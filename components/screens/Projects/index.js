import styled from "styled-components";
import { MenuProjects, EmptyState } from "@/components/organisms";
import { SectionProjectCard, TitleSelectorMobile } from "@/components/atoms";
import { useState } from "react";
import { CardProject, TitleSection } from "@/components/molecules";
import { useBreakpoints } from "../../../hooks/useBreakpoints";

import {
  dataFpay,
  dataLandings,
  dataB2C,
  dataLabels,
  dataColombia,
  dataIndecCards,
  dataAus,
  dataAuna,
  dataNidit,
  dataHop,
  dataClara,
  dataCustom,
  dataKualiti,
  dataDanone,
} from "../../../constants/dataCards";

import {
  dataLandingsMobile,
  dataLabelsMobile,
  dataIndecCardsMobile,
  dataNiditMobile,
  dataHopMobile,
} from "../../../constants/dataCardsMobile";

const TitleMobile = styled.div`
  color: #fff;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: 140%;
  background: transparent;
  padding: 21px 0px 29px 25px;
`;

const LayoutMenu = styled.div`
  display: flex;
  width: 100%;
  border-right: 1px solid rgba(96, 123, 150, 0.4);
  min-height: 720px;
  background: transparent;
  flex-direction: column;
`;

const Layout = styled.div`
  width: 100%;
  min-height: 720px;
  display: flex;
  background: transparent;
  border-left: 1px solid rgba(96, 123, 150, 0.4);
  border-right: 1px solid rgba(96, 123, 150, 0.4);
`;

const Column = styled.div`
  width: 24%;
  min-height: 720px;
  display: flex;
  background: #011627;
`;

const Body = styled.div`
  width: 76%;
  min-height: 720px;
  display: flex;
  background: transparent;
  background-image: url("grid2.png");
  background-color: #011627;
`;

const LayoutBody = styled.div`
  background: transparent;
  display: flex;
  width: 100%;
`;

const TextAreaLayout = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 720px;
`;

const ContainerNameSection = styled.div`
  background: transparent;
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgba(96, 123, 150, 0.4);
  height: 42px;
`;

const LayoutContainerCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
`;

const ContainerCards = styled.div`
  display: flex;
  width: 100%;
  background: transparent;
  flex-direction: row;
  margin-top: 32px;
  margin-left: 32px;
  margin-right: 32px;
  max-width: 90%;
  flex-wrap: wrap;
  max-height: 600px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 26px;
    border: 1px solid #1e2d3d;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(96, 123, 150, 0.1);
    height: 20px;
  }
`;

const LayoutContainerCardsMobile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  align-items: center;
`;

const ContainerCardsMobile = styled.div`
  display: flex;
  width: 100%;
  background: transparent;
  flex-direction: row;
  margin-top: 32px;
  margin-left: 32px;
  margin-right: 32px;
  max-width: 90%;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (min-width: 1440px) {
    justify-content: flex-start;
  }
`;

const ContainerTags = styled.div`
  display: flex;
  width: 100%;
  background: transparent;
  flex-direction: row;
  max-width: 98.5%;
  flex-wrap: inherit;
  max-height: 600px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border: 1px solid #1e2d3d;
    /* display: none; */
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(96, 123, 150, 0.1);
    height: 5px;
  }
`;

const BodyMobile = styled.div`
  width: 100%;
  display: flex;
  background: transparent;
  background-image: url("grid.png");
  background-color: #011627;
  flex-direction: column;
`;

const DivMenu = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 45px;
  padding-top: 18px;
`;

const Project = () => {
  const [valueFpay, setCheckboxFpay] = useState(false);
  const [valueLandings, setCheckboxLandings] = useState(false);
  const [valueB2C, setCheckboxB2C] = useState(false);
  const [valueLabels, setCheckboxLabels] = useState(false);
  const [valueIndec, setCheckboxIndec] = useState(false);
  const [valueAus, setCheckboxAus] = useState(false);
  const [valueAuna, setCheckboxAuna] = useState(false);
  const [valueNidit, setCheckboxNidit] = useState(false);
  const [valueColombia, setCheckboxColombia] = useState(false);
  const [valueHop, setCheckboxHop] = useState(false);
  const [valueClara, setCheckboxClara] = useState(false);
  const [valueCustom, setCheckboxCustom] = useState(false);
  const [valueKualiti, setCheckboxKualiti] = useState(false);
  const [valueDanone, setCheckboxDanone] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toogleOpen = () => setIsOpen(!isOpen);

  const emptyState =
    !valueFpay &&
    !valueLandings &&
    !valueB2C &&
    !valueLabels &&
    !valueIndec &&
    !valueAus &&
    !valueAuna &&
    !valueNidit &&
    !valueColombia &&
    !valueHop &&
    !valueClara &&
    !valueCustom &&
    !valueKualiti &&
    !valueDanone;

  const { isLg, isXs } = useBreakpoints();
  return (
    <Layout>
      {isLg ? (
        <>
          <Column>
            <LayoutMenu>
              <TitleSection title="projects" isProject />
              <MenuProjects
                isNoMobile
                valueFpay={valueFpay}
                valueLandings={valueLandings}
                valueB2C={valueB2C}
                valueLabels={valueLabels}
                valueIndec={valueIndec}
                valueAus={valueAus}
                valueAuna={valueAuna}
                valueNidit={valueNidit}
                valueColombia={valueColombia}
                valueHop={valueHop}
                valueClara={valueClara}
                valueCustom={valueCustom}
                valueKualiti={valueKualiti}
                valueDanone={valueDanone}
                onChangeFpay={({ target }) => setCheckboxFpay(!valueFpay)}
                onChangeLandings={({ target }) =>
                  setCheckboxLandings(!valueLandings)
                }
                onChangeB2C={({ target }) => setCheckboxB2C(!valueB2C)}
                onChangeLabels={({ target }) => setCheckboxLabels(!valueLabels)}
                onChangeIndec={({ target }) => setCheckboxIndec(!valueIndec)}
                onChangeAus={({ target }) => setCheckboxAus(!valueAus)}
                onChangeAuna={({ target }) => setCheckboxAuna(!valueAuna)}
                onChangeNidit={({ target }) => setCheckboxNidit(!valueNidit)}
                onChangeColombia={({ target }) =>
                  setCheckboxColombia(!valueColombia)
                }
                onChangeHop={({ target }) => setCheckboxHop(!valueHop)}
                onChangeClara={({ target }) => setCheckboxClara(!valueClara)}
                onChangeCustom={({ target }) => setCheckboxCustom(!valueCustom)}
                onChangeKualiti={({ target }) =>
                  setCheckboxKualiti(!valueKualiti)
                }
                onChangeDanone={({ target }) => setCheckboxDanone(!valueDanone)}
              />
            </LayoutMenu>
          </Column>
          <Body>
            <LayoutBody>
              <TextAreaLayout>
                <ContainerNameSection>
                  <ContainerTags>
                    {valueFpay && (
                      <SectionProjectCard
                        sectionName="Fpay"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxFpay(!valueFpay)
                        }
                      />
                    )}
                    {valueLandings && (
                      <SectionProjectCard
                        sectionName="Landings"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxLandings(!valueLandings)
                        }
                      />
                    )}
                    {valueB2C && (
                      <SectionProjectCard
                        sectionName="B2C"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxB2C(!valueB2C)
                        }
                      />
                    )}
                    {valueLabels && (
                      <SectionProjectCard
                        sectionName="Labels"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxLabels(!valueLabels)
                        }
                      />
                    )}
                    {valueIndec && (
                      <SectionProjectCard
                        sectionName="Indec"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxIndec(!valueIndec)
                        }
                      />
                    )}
                    {valueAus && (
                      <SectionProjectCard
                        sectionName="aUshuaia"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxAus(!valueAus)
                        }
                      />
                    )}
                    {valueAuna && (
                      <SectionProjectCard
                        sectionName="estudio"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxAuna(!valueAuna)
                        }
                      />
                    )}
                    {valueNidit && (
                      <SectionProjectCard
                        sectionName="nidit!"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxNidit(!valueNidit)
                        }
                      />
                    )}
                    {valueColombia && (
                      <SectionProjectCard
                        sectionName="HomePage"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxColombia(!valueColombia)
                        }
                      />
                    )}
                    {valueHop && (
                      <SectionProjectCard
                        sectionName="Hotelop"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxHop(!valueHop)
                        }
                      />
                    )}
                    {valueClara && (
                      <SectionProjectCard
                        sectionName="Clara Muzzio"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxClara(!valueClara)
                        }
                      />
                    )}

                    {valueCustom && (
                      <SectionProjectCard
                        sectionName="custom-xs"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxCustom(!valueCustom)
                        }
                      />
                    )}
                    {valueKualiti && (
                      <SectionProjectCard
                        sectionName="Kualiti"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxKualiti(!valueKualiti)
                        }
                      />
                    )}
                    {valueDanone && (
                      <SectionProjectCard
                        sectionName="Danone"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxDanone(!valueDanone)
                        }
                      />
                    )}
                  </ContainerTags>
                </ContainerNameSection>
                <LayoutContainerCards>
                  {emptyState ? (
                    <EmptyState />
                  ) : (
                    <ContainerCards>
                      <CardProject
                        dataCards={valueFpay && dataFpay}
                        isNoMobile
                      />
                      <CardProject
                        dataCards={valueLandings && dataLandings}
                        isNoMobile
                      />
                      <CardProject dataCards={valueB2C && dataB2C} isNoMobile />
                      <CardProject
                        dataCards={valueLabels && dataLabels}
                        isNoMobile
                      />
                      <CardProject
                        dataCards={valueIndec && dataIndecCards}
                        isNoMobile
                      />
                      <CardProject dataCards={valueAus && dataAus} isNoMobile />
                      <CardProject
                        dataCards={valueAuna && dataAuna}
                        isNoMobile
                      />
                      <CardProject
                        dataCards={valueNidit && dataNidit}
                        isNoMobile
                      />
                      <CardProject
                        dataCards={valueColombia && dataColombia}
                        isNoMobile
                      />
                      <CardProject dataCards={valueHop && dataHop} isNoMobile />
                      <CardProject
                        dataCards={valueClara && dataClara}
                        isNoMobile
                      />
                      <CardProject
                        dataCards={valueCustom && dataCustom}
                        isNoMobile
                      />
                      <CardProject
                        dataCards={valueKualiti && dataKualiti}
                        isNoMobile
                      />
                      <CardProject
                        dataCards={valueDanone && dataDanone}
                        isNoMobile
                      />
                    </ContainerCards>
                  )}
                </LayoutContainerCards>
              </TextAreaLayout>
            </LayoutBody>
          </Body>
        </>
      ) : (
        <BodyMobile>
          <TitleMobile>_projects</TitleMobile>
          <TitleSelectorMobile
            sectionName="projects"
            handleClick={toogleOpen}
            isSelected={isOpen}
            isMobile
          />
          {isOpen && (
            <DivMenu>
              <MenuProjects
                valueFpay={valueFpay}
                valueLandings={valueLandings}
                valueB2C={valueB2C}
                valueLabels={valueLabels}
                valueIndec={valueIndec}
                valueAus={valueAus}
                valueAuna={valueAuna}
                valueNidit={valueNidit}
                valueColombia={valueColombia}
                valueHop={valueHop}
                valueClara={valueClara}
                valueCustom={valueCustom}
                valueKualiti={valueKualiti}
                valueDanone={valueDanone}
                onChangeFpay={({ target }) => setCheckboxFpay(!valueFpay)}
                onChangeLandings={({ target }) =>
                  setCheckboxLandings(!valueLandings)
                }
                onChangeB2C={({ target }) => setCheckboxB2C(!valueB2C)}
                onChangeLabels={({ target }) => setCheckboxLabels(!valueLabels)}
                onChangeIndec={({ target }) => setCheckboxIndec(!valueIndec)}
                onChangeAus={({ target }) => setCheckboxAus(!valueAus)}
                onChangeAuna={({ target }) => setCheckboxAuna(!valueAuna)}
                onChangeNidit={({ target }) => setCheckboxNidit(!valueNidit)}
                onChangeColombia={({ target }) =>
                  setCheckboxColombia(!valueColombia)
                }
                onChangeHop={({ target }) => setCheckboxHop(!valueHop)}
                onChangeClara={({ target }) => setCheckboxClara(!valueClara)}
                onChangeCustom={({ target }) => setCheckboxCustom(!valueCustom)}
                onChangeKualiti={({ target }) =>
                  setCheckboxKualiti(!valueKualiti)
                }
                onChangeDanone={({ target }) => setCheckboxDanone(!valueDanone)}
                isMobile
              />
            </DivMenu>
          )}
          <LayoutContainerCardsMobile>
            {emptyState ? (
              <EmptyState isMobile />
            ) : (
              <ContainerCardsMobile>
                <CardProject dataCards={valueFpay && dataFpay} />
                <CardProject
                  dataCards={
                    valueLandings && (isXs ? dataLandingsMobile : dataLandings)
                  }
                />
                <CardProject dataCards={valueB2C && dataB2C} />
                <CardProject
                  dataCards={
                    valueLabels && (isXs ? dataLabelsMobile : dataLabels)
                  }
                />
                <CardProject
                  dataCards={
                    valueIndec && (isXs ? dataIndecCardsMobile : dataIndecCards)
                  }
                />
                <CardProject dataCards={valueAus && dataAus} />
                <CardProject dataCards={valueAuna && dataAuna} />
                <CardProject
                  dataCards={valueNidit && (isXs ? dataNiditMobile : dataNidit)}
                />
                <CardProject dataCards={valueColombia && dataColombia} />
                <CardProject
                  dataCards={valueHop && (isXs ? dataHopMobile : dataHop)}
                />
                <CardProject dataCards={valueClara && dataClara} />
                <CardProject dataCards={valueCustom && dataCustom} />
                <CardProject dataCards={valueKualiti && dataKualiti} />
                <CardProject dataCards={valueDanone && dataDanone} />
              </ContainerCardsMobile>
            )}
          </LayoutContainerCardsMobile>
        </BodyMobile>
      )}
    </Layout>
  );
};

export default Project;
