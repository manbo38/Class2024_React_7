import React, {useState} from "react";

const TextArea01=(props)=>{
    const [value, setValue] = useState("요청사항을 입력 하세요.");

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        alert("입력한 요청사항:" + value);
        e.preventDefault();                 // 새로고침 방지
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                요청사항: <br/>
                <textarea cols="40" rows="5" value={value} onChange={handleChange}/>
                    
            </label>
            <button type="submit">제출</button><br/>
            요청사항 : {value}
        </form>
    );
}
export default TextArea01;