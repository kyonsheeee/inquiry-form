import React, { FC, useState } from "react";
import FormItem from "../parts/FormItem";
import TextareaComp from "../parts/TextareaComp";
import InputComp from "../parts/InputComp";
import CheckboxContainer from "../parts/CheckboxContainer";

const ContactForm: FC = () => {
  const [state, setState] = useState({
    comment: "商品名やお問い合わせ内容を入力ください",
    last_name: "",
    first_name: "",
    last_name_kana: "",
    first_name_kana: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const target = e.target;
    const name = target.name;
    setState(() => {
      return { ...state, [name]: target.value };
    });
  };

  const clearAllInputValue = () => {
    setState({
      comment: "",
      last_name: "",
      first_name: "",
      last_name_kana: "",
      first_name_kana: "",
      email: "",
    });
  };

  const checkList = ["商品について", "採用について", "その他"];

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.persist();
    setState((prevState) => {
      return { ...prevState, comment: e.target.value };
    });
  };

  const submitAlert = (e: React.MouseEvent) => {
    e.persist();
    e.preventDefault();
    const error = Object.values(state).some((value) => {
      return value.length === 0;
    });

    if (error) {
      alert("未入力項目があります");
    } else {
      alert("送信します");
    }
  };

  return (
    <>
      <h2>お問い合わせフォーム</h2>
      <form>
        <div>
          <div>
            <FormItem title="お問い合わせ項目" required={true}></FormItem>
          </div>
          <CheckboxContainer name="about" value={checkList} />
        </div>
        <hr></hr>

        <div>
          <div>
            <FormItem title="お問い合わせ内容" required={true}></FormItem>
          </div>
          <TextareaComp
            name="お問い合わせ内容"
            value={state.comment}
            onChange={onChangeHandler}
          />
        </div>
        <hr></hr>

        <div>
          <div>
            <FormItem title="お名前" required={true}></FormItem>
          </div>
          <div>
            <p>
              姓
              <InputComp
                name="last_name"
                value={state.last_name}
                onChange={handleInputChange}
              />
            </p>
            <p>
              名
              <InputComp
                name="first_name"
                value={state.first_name}
                onChange={handleInputChange}
              />
            </p>
          </div>
        </div>
        <hr></hr>

        <div>
          <div>
            <FormItem title="フリガナ" required={true}></FormItem>
          </div>
          <div>
            <p>
              セイ
              <InputComp
                name="last_name_kana"
                value={state.last_name_kana}
                onChange={handleInputChange}
              ></InputComp>
            </p>
            <p>
              メイ
              <InputComp
                name="first_name_kana"
                value={state.first_name_kana}
                onChange={handleInputChange}
              ></InputComp>
            </p>
          </div>
        </div>
        <hr></hr>

        <div>
          <div>
            <div>
              <FormItem title="メールアドレス" required={true}></FormItem>
            </div>
          </div>
          <p>
            <InputComp name="email" value={state.email} onChange={handleInputChange}></InputComp>
          </p>
        </div>
      </form>
      <div>
        <button onClick={clearAllInputValue}>入力内容をクリア</button>
        <button onClick={submitAlert}>送信</button>
      </div>
    </>
  );
};

export default ContactForm;
