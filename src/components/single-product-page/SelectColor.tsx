type ColorProps = {
  colors: string[];
  productColor: string;
  setProductColor: React.Dispatch<React.SetStateAction<string>>;
};

const SelectColor = ({ productColor, colors, setProductColor }: ColorProps) => {
  return (
    <div className="mt-6 ">
      <h4 className="text-md font-md tracking-wider capitalize">colors</h4>
      <div className="mt-2">
        {colors.map((color) => {
          return (
            <button
              type="button"
              key={color}
              onClick={() => setProductColor(color)}
              style={{ backgroundColor: color }}
              className={`rounded-full w-6 h-6 mr-2 border-2 ${
                color === productColor && 'border-primary'
              }`}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default SelectColor;
