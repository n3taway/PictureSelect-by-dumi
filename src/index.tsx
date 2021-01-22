import React from 'react';
import './index.less';

type PicturesItem = {
  id: string;
  name: string;
  url: string;
  [key: string]: any;
};

type PictureSelectProps = {
  pictures: PicturesItem;
  value: PicturesItem['id'][];
  onChange: (id: PicturesItem['id'][]) => {};
};

function PictureSelect(props: PictureSelectProps) {
  const { value, pictures = [], onChange = () => {} } = props;

  const handleClick = (id: PicturesItem['id']) => {
    const values = value.includes(id)
      ? value.filter(i => i !== id)
      : [...value, id];
    onChange(values);
  };

  const selectedAll = pictures.length === value.length;

  const selectAll = () => {
    if (selectedAll) {
      onChange([]);
    } else {
      const values = pictures.map((i: PicturesItem) => i.id);
      onChange(values);
    }
  };

  return (
    <div className="picture-select-wrapper">
      <div>
        <p>
          <input type="checkbox" onChange={selectAll} checked={selectedAll} />
          已选中{value.length}个
        </p>
      </div>
      <div className="picture-list">
        {pictures.map((item: PicturesItem) => {
          return (
            <div className="picture-item" key={item.id}>
              <img
                draggable="false"
                src={item.url}
                alt={item.name}
                title={item.name}
                onClick={() => handleClick(item.id)}
              />
              <input
                type="checkbox"
                checked={value.includes(item.id)}
                onChange={() => handleClick(item.id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PictureSelect;
