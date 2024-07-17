//Import use file css
export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__wrap">
          <div className="header__wrap-lg">
            <a href="/">
              <img
                src="https://quyhoach.thongtin.land/images/logo-RGB02.png"
                alt="TTLAND"
              />
              <span className="d-none">TTLAND</span>
            </a>
          </div>
          <div className="header__wrap-mn">
            <div className="header__wrap-mn__it">
              <a
                href="#"
                className="header__wrap-mn__lk js-toggle-side-menu side-qh"
              >
                <span className="mn-lk-ic">
                  <svg viewBox="0 0 24 24">
                    <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
                  </svg>
                </span>
                <span className="mn-lk-lb">Quy hoạch</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
