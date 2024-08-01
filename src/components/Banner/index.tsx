import { BannerComponent } from "./styles";

type BannerProps = {
  text: string;
};

export function Banner({ text }: BannerProps) {
  return (
    <BannerComponent>
      <h2>{text}</h2>
    </BannerComponent>
  );
}
