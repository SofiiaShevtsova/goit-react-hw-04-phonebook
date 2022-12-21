import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import photo from 'image/contact.jpg';

const StyleList = {
  SectionContainer: styled.div`
    width: 600px;
    padding: 20px;
    background-color: rgb(230, 154, 92);
    font-size: 24px;
    color: black;
    font-weight: bold;
  `,

  SectionTitle: styled.h2`
    font-size: 32px;
    margin-bottom: 20px;
    color: rgb(150, 50, 50);
  `,

  FormStyle: styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,

  FieldStyles: styled(Field)`
    width: 50%;
    font-size: 20px;
    border-radius: 5px;
    border: 2px solid brown;
    background-color: bisque;
    padding: 10px;
  `,

  BtnStyle: styled.button`
    width: 30%;
    font-size: 20px;
    border-radius: 5px;
    border: 2px solid brown;
    background-color: rgb(240, 103, 69);
    color: brown;
    padding: 10px;
    &:hover {
      background-color: brown;
      color: bisque;
      font-weight: 600;
    }
  `,

  ErrorMessageStyle: styled.div`
    display: block;
    color: red;
    font-size: 16px;
  `,

  ListOfContactsStyle: styled.ul`
    list-style: url('${photo}');
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;
    padding-left: 50px;
    font-size: 28px;
    & > li {
      padding-left: 10px;
    }
  `,

  BtnDeleteContact: styled.button`
    display: inline-block;
    margin-left: 20px;
    font-size: 16px;
    border-radius: 5px;
    border: 2px solid brown;
    background-color: rgb(240, 103, 69);
    color: brown;
    padding: 5px;
    position: relative;
    top: -5px;
    &:hover {
      background-color: brown;
      color: bisque;
      font-weight: 600;
    }
  `,

  IsEmptyList: styled.p`
    display: block;
    color: red;
    font-size: 16px;
    margin-top: 30px;
  `,
};

export default StyleList;
