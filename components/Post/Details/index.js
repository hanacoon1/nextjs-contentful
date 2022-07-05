import DetailsStyles from "@styles/Details.module.css";

export default function Details(props) {
  const { timeline, tools, teammates } = props;

   return (
    <div className={DetailsStyles.details}>
      <div className={DetailsStyles.timeline}>
        <b>Timeline</b> <br/>
        {timeline}
        </div>
      <div className={DetailsStyles.tools}>
        <b>Tools</b> <br/>
        {tools}
      </div>
      <div className={DetailsStyles.teammates}>
        <b>Teammates</b> <br/>
        {teammates}
        </div>
    </div>

  );
}