import React,{useEffect,useState} from 'react'
import Navbar from '../component/Navbar'

import PostCard from "../component/PostCard";
import '../service/fetch'
import {getAgain} from "../service/fetch";
import axios from "axios";
import Skel from '../component/skeleton'
import InfiniteScroll from 'react-infinite-scroller';
import Loader from 'react-loader-spinner'

function Home({tema}){

    //fetch recent post

    const [recent,setRecent] = useState([])
    const [postingan,setPostingan] = useState([])
    const [pagePost,setPageAllPost] = useState(2)
    const [skele,setSkele] = useState([1,2,3,4])
    useEffect(() => {
        axios.get("https://api.fostiums.org/getrecent")
            .then(res => {
                const status = res.status;
                const result = res.data;
                setRecent(result.result);
                console.log(status)
                console.log(result.result)
            })



    }, []);




    const fetchMoreData = () => {
        //const newData = [...postingan, ...getAgain(pagePost+1)];
        axios.get("https://api.fostiums.org/getpost?page="+pagePost)
            .then(res => {
                const status = res.status;
                const result = res.data;
                console.log("infinite")
                console.log(res.data.result.data)
                const getPagination = res.data.result.data
                const newData = [...postingan, ...getPagination];
                setPostingan(newData)
                setPageAllPost(pagePost+1)
            })
    }


    return(
        <>

            <div className="container">
                <div className="mainheading">
                    <h1 className="sitetitle">FOSTI UMS BLOG</h1>
                    <p className="lead">
                        Forum Open Source Teknik Informatika Universitas Muhammadiyah Surakarta
                    </p>
                </div>
                <section className="featured-posts">
                    <div className="section-title">
                        <h2><span>Terbaru</span></h2>
                    </div>
                    <div className="card-columns listfeaturedtag">
                        {
                            recent.length>0?
                                recent.map((val,index) => {
                                    const regex = /(<([^>]+)>)/ig;
                                    const sek = val.post.replace(/&nbsp;/g, "");
                                    const sekilas = sek.replace(regex, '');

                                    return(
                                        <PostCard
                                            image={val.featured_img}
                                            penulis={val.penulis}
                                            judul={val.title}
                                            updated_at={val.updated_at}
                                            sekilas={sekilas}
                                            slug={val.slug}
                                            tema={tema}
                                        />
                                    )
                                })
                                :

                                skele.map((val,index) => {
                                    return(
                                        <Skel/>
                                    )
                                })

                        }


                    </div>
                </section>
                <section className="recent-posts">
                    <div className="section-title">
                        <h2><span>Semua Post</span></h2>
                    </div>
                </section>
                <div className="card-columns listfeaturedtag">
                <InfiniteScroll
                    initialLoad={false}
                    loadMore={fetchMoreData}
                    hasMore={true}
                    loader={(
                        <center><Loader type="ThreeDots" color="gray" height={80} width={80} /></center>
                    )}
                >
                    {postingan.map(( val,index) => {
                        const regex = /(<([^>]+)>)/ig;
                        const sek = val.post.replace(/&nbsp;/g, "");
                        const sekilas = sek.replace(regex, '');
                        return (
                            <PostCard
                                image={val.featured_img}
                                penulis={val.penulis}
                                judul={val.title}
                                updated_at={val.updated_at}
                                sekilas={sekilas}
                                slug={val.slug}
                                tema={tema}
                            />
                        )
                    })}
                </InfiniteScroll>
                </div>
            </div>

        </>
    )
}
export default Home;
