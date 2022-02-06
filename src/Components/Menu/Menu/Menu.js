// import { Modal } from "antd";
import { Button, Form, Input, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import item3 from "../../../images/Asset_01/ALUMINUM-FREE PACKAGING.png";
import item4 from "../../../images/Asset_01/CO  Reduction.png";
import {
  default as item1,
  default as pack,
} from "../../../images/Asset_01/Forest-Based Materials.png";
import item2 from "../../../images/Asset_01/FSCTM Board.png";
import item5 from "../../../images/Asset_01/Fully  Recyclable.png";
import ring from "../../../images/Asset_01/Line.png";
import "./Menu.css";
import MobileMenu from "./MobileMenu";

const Menu = () => {
  const { Option } = Select;
  const { TextArea } = Input;
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState("");
  const [registerData, setRegisterData] = useState({});
  const [selected, setSelected] = useState("bangladesh");
  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });

  const updateSize = () =>
    setSize({
      x: window.innerWidth,
      y: window.innerHeight,
    });
  useEffect(() => (window.onresize = updateSize), []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newRegisterData = { ...registerData, selected };
    newRegisterData[field] = value;
    console.log(newRegisterData);
    setRegisterData(newRegisterData);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log(registerData);
  };
  return (
    <>
      <div className="menu-bg">
        {size.x > 905 ? (
          <div className="menu-circle">
            <div className="main-circle">
              <div className="rectangle">
                <div className="circle">
                  <img src={ring} alt="" />
                  <img src={pack} alt="" />
                  <Link to="/forestBased">
                    <img src={item1} alt="" />
                    <p>
                      FOREST-BASED <br /> MATERIALS
                    </p>
                  </Link>

                  <Link to="/fscLabel">
                    <img src={item2} alt="" />
                    <p>
                      FSC<sup>TM</sup> <br /> LABEL
                    </p>
                  </Link>
                  <Link to="/aluminum">
                    <img src={item3} alt="" />
                    <p>ALUMINUM-FREE PACKAGING</p>
                  </Link>
                  <Link to="/co2Reduction">
                    <img src={item4} alt="" />
                    <p>
                      CO<sub>2</sub> <br /> REDUCTION
                    </p>
                  </Link>
                  <Link to="/recyclable">
                    <img src={item5} alt="" />
                    <p>
                      FULLY <br /> RECYCLABLE
                    </p>
                  </Link>
                </div>
              </div>
              {/* <button>Get a Sample!</button> */}
              <div>
                <button onClick={showModal}>Get a Sample!</button>
                <Modal
                  title="MAILING ADDRESS"
                  visible={visible}
                  width={700}
                  footer={false}
                  onCancel={handleCancel}
                >
                  <div className="form">
                    <form
                      name="basic"
                      labelCol={{
                        span: 8,
                      }}
                      wrapperCol={{
                        span: 16,
                      }}
                      initialValues={{
                        remember: true,
                      }}
                      onSubmit={handleRegisterSubmit}
                    >
                      <Form.Item
                        label="Name"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Name!",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Your full name"
                          name="name"
                          onChange={handleChange}
                          type="text"
                        />
                      </Form.Item>
                      <Form.Item
                        label="Company"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Company Name!",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Your Company name"
                          onChange={handleChange}
                          type="text"
                          name="company"
                        />
                      </Form.Item>
                      <Form.Item
                        label="Address"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Address!",
                          },
                        ]}
                      >
                        <TextArea
                          placeholder="your Address"
                          allowClear
                          rows={4}
                          onChange={handleChange}
                          name="address"
                          type="text"

                          // onChange={onChange}
                        />
                      </Form.Item>
                      <Form.Item
                        label="Postal Code"
                        name="postcode"
                        rules={[
                          {
                            required: true,
                            message: "Please input your postal code!",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Your PostCode"
                          onChange={handleChange}
                          type="number"
                          name="postCode"
                          min={1}
                          max={9999}
                        />
                      </Form.Item>
                      <Form.Item
                        label="Country"
                        rules={[
                          {
                            required: true,
                            message: "Please input your password!",
                          },
                        ]}
                      >
                        <Select
                          placeholder="Select Your Country"
                          allowClear
                          value={selected}
                          onChange={(e) => setSelected(e.target.value)}
                        >
                          <Option value="bangladesh">Bangladesh</Option>
                          <Option value="england">England</Option>
                          <Option value="australia">Australia</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item>
                        <div className="submit-btn">
                          <Button type="primary" htmlType="submit">
                            Submit
                          </Button>
                          <Button type="primary" onClick={handleCancel}>
                            Cancel
                          </Button>
                        </div>
                      </Form.Item>
                    </form>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        ) : (
          <MobileMenu />
        )}
      </div>
    </>
  );
};

export default Menu;
