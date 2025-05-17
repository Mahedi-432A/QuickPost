import { useState, useEffect } from "react";
import { getPostPagination } from "../services/posts";

const usePostPagination = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const limit = 6;

    useEffect(() => {
        const fetchPosts = async () => {
            setData([]);
            try {
                const response = await getPostPagination({
                    _page: page,
                    _limit: limit,
                });
                setData(response.data);
                const totalCount = response.headers["x-total-count"];
                setTotalPages(Math.ceil(totalCount / limit));
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    },[page]);

    return {
        data,
        loading,
        error,
        page,
        setPage,
        totalPages,
    }

};

export default usePostPagination;