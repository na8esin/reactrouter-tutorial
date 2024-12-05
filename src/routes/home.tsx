import CSSModule from "./home.module.scss";

export default function Home() {
  return (
    <>
      <div>home</div>
      <div className={CSSModule.HomeBody}>home</div>
      <div className={CSSModule.HomeBody}>
        <div className={"error"}>home</div>
      </div>
      <div className={CSSModule.HomeBody}>
        <div className={`${CSSModule.error}`}>home</div>
      </div>
    </>
  );
}
