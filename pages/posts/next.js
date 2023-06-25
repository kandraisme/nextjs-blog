import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost(){
    return (
    <Layout>
    <Head>
        <title>NextJS, Membuat Website Dengan ReactJS</title>
    </Head>

    <h1>
        Apa itu ReactJS dan Apa itu NextJS?
    </h1>
    <p>
        React merupakan sebuah library javascript yang sekarang sepertinya banyak digunakan oleh perusahaan teknologi dan juga website-website besar. Dengan pengetahuan dasar mengenai kodingan website seperti HTML dan CSS, saya berusaha untuk menghindari penggunaan React. Namun setelah mengikuti pelatihan Google Cloud Digital Leader serta menjalani Quest mengenai beragam cara mendeploy website ke Google Cloud berinteraksi dengan website yang dibangun dengan ReactJS, saya putuskan untuk mempelajarinya lebih lanjut.
    </p>
    <p>
        Mungkin sebelum dosen online, Sandhika Galih, mempublish video mengenai cara mempelajari React yang paling gampang untuk pemula, saya sudah memulai mempelajari penggunaan ReactJS baik dari situsnya sendiri maupun dari situs NextJS. Hanya saja kemampuan saya tidak bisa secepat dulu dalam memahami konsep dan praktek dari penggunaan ReactJS maupun NextJS. 
    </p>
    <h2>
        <Link href="/">Back to Home</Link>
    </h2>
    </Layout>
    );
}