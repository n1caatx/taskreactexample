import React from "react";
import styles from './form.module.css';
import axios from "axios";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      price: e.target.price.value,
      image: e.target.image.value,
    };

    axios.post("https://northwind.vercel.app/api/products", formData)
      .then(response => {
        console.log("Response:", response.data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  return (
    <div id="content" className={styles.content}>
      <div className={styles.contentBox}>
        <h1 className={styles.getInTouch}>GET IN TOUCH</h1>
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className={styles.input}>
            <div className={styles.inputGroup}>
              <label htmlFor="title">Title:</label>
              <input type="text" name="title" id="title" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="price">Price:</label>
              <input type="text" name="price" id="price" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="image">Image:</label>
              <input type="text" name="image" id="image" />
            </div>
          </div>
          <div className={styles.subButton}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
