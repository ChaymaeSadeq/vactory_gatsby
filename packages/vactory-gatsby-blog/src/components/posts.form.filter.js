import React from "react"

const PostsFormFilter = ({terms, value, handleChange}) => {
    return (
        <div>
            <label htmlFor="blog-category">Thématique</label>
            <select
                id="blog-category"
                onBlur={null}
                onChange={(e) => handleChange(e.target.value)}
                defaultValue={value}
            >
                <option value="all">Tous les thématiques</option>
                {terms.map(term => {
                    return (
                        <option key={term.id} value={term.id}>{term.name}</option>
                    )
                })}
            </select>
        </div>
    )
};

export default PostsFormFilter
