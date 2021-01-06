import Thumb from '../vendor/img/demopic/1.jpg'
import * as url from "url";
import parse from 'html-react-parser';
import TextTruncate from 'react-text-truncate';
import trimWords from 'trim-words';
import Ava from '../vendor/img/ava.png'
import {Link, useHistory} from "react-router-dom";
function PostCard({image,penulis,judul,updated_at,sekilas,slug,tema}){
    const history = useHistory();
    function handleGo(path) {
        history.push(path);
    }
    return(

        <div className="card" style={tema=="dark"?{backgroundColor:"#262525"}:null}>

            <div className="row">
                <div className="col-md-5 wrapthumbnail">
                    <a onClick={()=>{handleGo(slug)}}>
                        <div className="thumbnail" style={{backgroundImage:`url(https://api.fostiums.org/images/blog/${image})`}}>
                        </div>
                    </a>
                </div>
                <div className="col-md-7">
                    <div className="card-block">
                        <h2 className="card-title"><a onClick={()=>{handleGo(slug)}}>
                            <TextTruncate
                                style={tema=="dark"?{color:"white"}:{color:"black"}}
                                line={5}
                                element="span"
                                truncateText=""
                                text={parse(judul)}
                            />
                        </a></h2>
                        <h4 className="card-text" num>
                            <TextTruncate
                                style={tema=="dark"?{color:"white"}:{color:"black"}}
                                line={3}
                                element="span"
                                truncateText="…"
                                text={sekilas}
                                textTruncateChild={<Link to={"/"+slug}>Baca</Link>}
                            />
                        </h4>
                        <div className="metafooter">
                            <div className="wrapfooter">
								<span className="meta-footer-thumb">
								<a href="author.html"><img className="author-thumb"
                                                           src={Ava}
                                                           alt="Sal"/></a>
								</span>
                                <span className="author-meta">
								<span className="post-name"><a href="author.html" style={tema=="dark"?{color:"white"}:null}>{penulis}</a></span><br/>
								<span className="post-date" style={tema=="dark"?{color:"white"}:null}>{updated_at}</span>
								</span>
                                {/*} <span className="post-read-more"><a href="post.html" title="Read Story"><svg
                                    className="svgIcon-use" width="25" height="25" viewBox="0 0 25 25"><path
                                    d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                                    fill-rule="evenodd"></path></svg></a></span>*/}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default PostCard;
