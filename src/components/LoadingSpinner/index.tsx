import './index.scss';

type Props = {
  size: string; 
  color: string; 
};

export default function LoadingSpinner(props: Props) {
  return (
    <div
      className="loading-spinner"
      style={{
        width: props.size,
        height: props.size,
        borderColor: `${props.color} transparent transparent transparent`,
      }}
    />
  );
}
