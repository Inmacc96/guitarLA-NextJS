import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/aboutus.module.css";

const Aboutus = () => {
  return (
    <Layout title={"About Us"} description={"About us, guitarLA, music shop"}>
      <main className="container">
        <h1 className="heading">About Us</h1>

        <div className={styles.content}>
          <Image
            src="/img/aboutus.jpg"
            width={1000}
            height={800}
            alt="image about us"
          />

          <div>
            <p>
              Ut quis quam nec est finibus luctus eget a magna. Aliquam erat
              volutpat. Nulla dictum elementum sapien, in porta nisl venenatis
              ut. Suspendisse at ullamcorper ante. Nullam fringilla interdum
              lacus, ut dapibus turpis pharetra sit amet. Mauris nec odio
              pharetra, ultrices nulla non, pretium metus. Etiam a lobortis
              ipsum. In tincidunt augue quis mollis vulputate. Sed in sapien
              enim. 
            </p>

            <p>
              Praesent mi urna, commodo at nisl at, faucibus gravida erat.
              Suspendisse potenti. Suspendisse sed orci volutpat, lacinia tortor
              in, congue eros. Nullam ut sollicitudin justo. Nulla molestie
              magna eget lorem semper ornare. Nullam et sapien vel lacus
              elementum dapibus. Cras ornare ligula et mi placerat tempus.
              Mauris consequat vitae odio id venenatis. Pellentesque feugiat eu
              erat in sodales.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Aboutus;
