import {ActivityIndicator, FlatList, RefreshControl, Text, View} from "react-native";
import styled from "styled-components/native";
import axios from "axios";
import {useEffect, useState} from "react";
import {PostComponent} from "../components/PostComponent";
import Loader from "../components/Loader";
const PostsContainer = styled.View`
  flex-direction: column;
  margin-top: 30px;
`;





const Posts = () => {
    const [posts,setPosts] = useState([]);
    const [offset,setOffset] = useState(0);
    const [loading,setLoading] = useState(true);
    const fetchPost = () => {
        setLoading(true);
        axios.get(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${offset}`).then(res=> {
            setPosts(res.data.data)
            // console.log(JSON.stringify(res.data.data,null,2))
        }).finally(()=>{
            setLoading(false);
        });
    }
    useEffect(fetchPost,[])

    if(loading){
        return (
            <Loader/>
        )
    }

    return (
        <PostsContainer>
            <FlatList
                refreshControl={<RefreshControl refreshing={loading} onRefresh={fetchPost} />}
                data={posts}
                renderItem={({item}) => <PostComponent title={item.attributes.slug} imageUrl={item.attributes.posterImage.tiny}/>
            }
            />
        </PostsContainer>
    );
};

export default Posts;