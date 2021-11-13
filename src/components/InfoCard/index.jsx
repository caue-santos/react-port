import * as S from "./styles";

const InfoCard = ({ data }) => {
  const defaultInfoCard = {
    name: "Caue Santos",
    image: "https://cauesantos.dev.br/img/IMG_0979.jpg",
    shortDescription: "um texto qualquer",
  };

  return (
    <S.CardContainer>
      <S.Image src={data.image ?? defaultInfoCard.image} />
      <S.CardBody>
        <S.CardTitle>
          <strong>{data.name ?? defaultInfoCard.name}</strong>
        </S.CardTitle>
        <S.Description>
          {data.description ?? defaultInfoCard.shortDescription}
        </S.Description>

        <S.Social>
          <S.ClickToLink target="_blank" href={data?.social?.twitter}>
            <S.Twitter />
          </S.ClickToLink>

          <S.ClickToLink target="_blank" href={data?.social?.instagram}>
            <S.Instagram />
          </S.ClickToLink>

          <S.ClickToLink target="_blank" href={data?.social?.linkedin}>
            <S.LinkedIn />
          </S.ClickToLink>
        </S.Social>
      </S.CardBody>
    </S.CardContainer>
  );
};

export default InfoCard;
