import Image from 'next/image';

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills__content">
          <div data-aos="fade-up" className="skills__title">
            <div className="skills__title--icon">
              <Image
                src="/svg/ninja.svg"
                height={42}
                width={42}
                alt="skills"
              />
            </div>
            <div className="skills__title--heading heading--primary">
              I&#39;m Ninja at
            </div>
          </div>
          <div className="skills__cards">
            <div data-aos="fade-up" className="skills__card">
              <div className="skills__card--icon">
                <Image
                  src="/svg/html.svg"
                  height={80}
                  width={80}
                  alt="html"
                />
              </div>
              <div className="skills__card--title">html</div>
            </div>
            <div data-aos="fade-up" className="skills__card">
              <div className="skills__card--icon">
                <Image
                  src="/svg/css.svg"
                  height={80}
                  width={80}
                  alt="css"
                />
              </div>
              <div className="skills__card--title">css</div>
            </div>
            <div data-aos="fade-up" className="skills__card">
              <div className="skills__card--icon">
                <Image
                  src="/svg/javascript.svg"
                  height={80}
                  width={80}
                  alt="javascript"
                />
              </div>
              <div className="skills__card--title">javascript</div>
            </div>
            <div data-aos="fade-up" className="skills__card">
              <div className="skills__card--icon">
                <Image
                  src="/svg/react.svg"
                  height={80}
                  width={80}
                  alt="reactjs"
                />
              </div>
              <div className="skills__card--title">reactjs</div>
            </div>
            <div data-aos="fade-up" className="skills__card">
              <div className="skills__card--icon">
                <Image
                  src="/svg/next.svg"
                  height={70}
                  width={110}
                  alt="nextjs"
                />
              </div>
              <div className="skills__card--title">nextjs</div>
            </div>
            <div data-aos="fade-up" className="skills__card">
              <div className="skills__card--icon">
                <Image
                  src="/svg/mui.svg"
                  height={80}
                  width={80}
                  alt="Material-ui"
                />
              </div>
              <div className="skills__card--title">materialui</div>
            </div>
            <div data-aos="fade-up" className="skills__card">
              <div className="skills__card--icon">
                <Image
                  src="/svg/redux.svg"
                  height={80}
                  width={80}
                  alt="redux"
                />
              </div>
              <div className="skills__card--title">redux</div>
            </div>
            <div data-aos="fade-up" className="skills__card">
              <div className="skills__card--icon">
                <Image
                  src="/svg/liquid.svg"
                  height={80}
                  width={80}
                  alt="liquid"
                />
              </div>
              <div className="skills__card--title">liquid</div>
            </div>
            <div data-aos="fade-up" className="skills__card">
              <div className="skills__card--icon">
                <Image
                  src="/svg/sass.svg"
                  height={80}
                  width={80}
                  alt="sass"
                />
              </div>
              <div className="skills__card--title">sass</div>
            </div>
            <div data-aos="fade-up" className="skills__card">
              <div className="skills__card--icon">
                <Image
                  src="/svg/github.svg"
                  height={80}
                  width={80}
                  alt="github"
                />
              </div>
              <div className="skills__card--title">github</div>
            </div>
            <div data-aos="fade-up" className="skills__card">
              <div className="skills__card--icon">
                <Image
                  src="/svg/bootstrap.svg"
                  height={80}
                  width={80}
                  alt="bootstrap"
                />
              </div>
              <div className="skills__card--title">bootstrap</div>
            </div>
            <div data-aos="fade-up" className="skills__card">
              <div className="skills__card--icon">
                <Image
                  src="/svg/figma.svg"
                  height={80}
                  width={80}
                  alt="figma"
                />
              </div>
              <div className="skills__card--title">figma</div>
            </div>
            <div data-aos="fade-up" className="skills__card">
              <div className="skills__card--icon">
                <Image
                  src="/svg/npm.svg"
                  height={80}
                  width={80}
                  alt="npm"
                />
              </div>
              <div className="skills__card--title">npm</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
