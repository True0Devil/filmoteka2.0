import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={css.loaderBody}>
      <div className={css.loader}>
        <div className={css.loader__container}>
          <div className={css.loader__film}>
            <img
              className={css.loader__filmImg}
              src="https://www.dropbox.com/s/o4p5i3nfw92rhfz/film.png?raw=1"
              alt=""
            />
            <img
              className={css.loader__filmImg}
              src="https://www.dropbox.com/s/o4p5i3nfw92rhfz/film.png?raw=1"
              alt=""
            />
          </div>
          <img
            className={css.loader__camera}
            src="https://www.dropbox.com/s/348z6yvtt9hbos2/camera.png?raw=1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
