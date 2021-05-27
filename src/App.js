import "./main.scss";
import Counter from "./count";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 }
  ]);
  const onIncrement = (val, id) => {
    const newData = data.map((item) =>
      item.id === id ? { ...item, value: val } : item
    );
    setData(newData);
  };
  const onDecrement = (val, id) => {
    const newData = data.map((item) =>
      item.id === id ? { ...item, value: val } : item
    );
    setData(newData);
  };
  const onChange = (val, id) => {
    const newData = data.map((item) =>
      item.id === id ? { ...item, value: val } : item
    );
    setData(newData);
  };

  const sum = () => {
    let len = data.length;
    let num = 0;
    if (len === 0) return 0;
    for (let i = data.length - 1; i >= 0; i--) {
      num += data[i].value;
    }
    return num;
  };
  return (
    <div className="App">
      <section class="section">
        <h1 class="title">React + Javascript</h1>
        <h2 class="subtitle">面试练习</h2>
        <p>
          <strong>说明：</strong>
          根据下面的说明修改此代码。您应该在2小时内完成此练习
        </p>
        <p>
          这个应用程序有两个组件: <strong> Counter </strong> 和{" "}
          <strong> App </strong>{" "}
          。下面的步骤将带您通过修改和添加组件来更改功能和实现。
        </p>
        <ol class="instructions">
          <li>
            更新Counter组件，将<code>onIncrement</code>和
            <code>onDecrement</code>
            回调作为支持，并确保它们独立地更新计数器的值。每个回调都应该采用一个整型值作为参数，它是计数器现有值的增量。
          </li>
          <li>
            将全局 <code> data </code> array 移动到 <code> App </code> component
            的组件状态
          </li>
          <li>
            呈现第四个 <code> Counter </code>{" "}
            component，并确保它的值独立于其他组件更新。
          </li>
          <li>
            创建一个 <code> Total </code> component，它应该显示在{" "}
            <code> Counter </code> components 下面，并且始终显示所有{" "}
            <code> Counter </code> 值的运行总数。
          </li>
          <li>
            复制一个 <code> Counter </code>{" "}
            component，保存原始文件，以便教师以后可以查看。然后做以下事情:
            <ol>
              <li>
                从新的 <code> Counter </code> 组件中删除{" "}
                <code> onIncrement </code> 和 <code> onDecrement </code> props
              </li>
              <li>
                添加一个单独的 <code> onChange </code> callback
                prop，它接受一个单独的整数参数: 计数器的新值。
              </li>
              <li>
                确保所有 <code> Counter </code>{" "}
                组件在这次更改之后仍然独立地更新和运行。
              </li>
            </ol>
          </li>
        </ol>
      </section>
      <section>
        <div>
          {data.map((counter) => (
            <Counter
              key={counter.id}
              value={counter.value}
              id={counter.id}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onChange={onChange}
            />
          ))}
        </div>
        <div>{sum()}</div>
      </section>
    </div>
  );
}
