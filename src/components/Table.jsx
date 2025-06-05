import React, { useRef, useState } from "react";

function Table() {
  let mockDatas = [
    { id: 1, name: "Jasur", surname: "Qurbonov" },
    { id: 2, name: "Jasurbek", surname: "Qurbonboyev" },
    { id: 3, name: "Jamshid", surname: "Tohirov" },
    { id: 4, name: "Jasurjon", surname: "Qurbonjonov" },
    { id: 5, name: "Sardor", surname: "Ismatullayev" },
  ];

  const [datas, setDatas] = useState(mockDatas);
  const [isEditing, setIsEditing] = useState(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const [searchField, setSearchField] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");

  const onEdit = (data) => {
    setIsEditing(data);
    setName(data.name);
    setSurname(data.surname);
  };

  const onSave = () => {
    let res = {
      id: isEditing?.id,
      name,
      surname,
    };
    let newArr = datas.map((val) => (val.id === isEditing?.id ? res : val));
    setDatas(newArr);
    setIsEditing(null);
  };

  const onDelete = (id) => {
    let resArr = datas.filter((val) => val.id !== id);
    setDatas(resArr);
  };

  const refName = useRef();
  const refSurname = useRef();

  const onCreate = () => {
    if (!refName.current.value.trim() || !refSurname.current.value.trim()) {
      alert("The fields must not be empty");
      return;
    }
    let newUser = {
      id: new Date().getTime(),
      name: refName.current.value,
      surname: refSurname.current.value,
    };
    setDatas([...datas, newUser]);
    refName.current.value = "";
    refSurname.current.value = "";
  };

  // 🔍 Filtered data based on search
  const filteredData = datas.filter((item) =>
    item[searchField].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <select onChange={(e) => setSearchField(e.target.value)} value={searchField}>
          <option value="name">name</option>
          <option value="surname">surname</option>
        </select>
        <input
          type="text"
          placeholder="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <hr />

      <input ref={refName} type="text" placeholder="name" />
      <input ref={refSurname} type="text" placeholder="surname" />
      <button onClick={onCreate}>Add</button>

      <table border="1" width="500px" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>surname</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>
                {isEditing?.id === data.id ? (
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                  />
                ) : (
                  data.name
                )}
              </td>
              <td>
                {isEditing?.id === data.id ? (
                  <input
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    type="text"
                  />
                ) : (
                  data.surname
                )}
              </td>
              <td>
                <button onClick={() => onDelete(data.id)}>del</button>
                {isEditing?.id === data.id ? (
                  <button onClick={onSave}>save</button>
                ) : (
                  <button onClick={() => onEdit(data)}>edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
