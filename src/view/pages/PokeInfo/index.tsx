import { useLocation } from "react-router-dom";

import { getLastSegment } from "../../helpers/url";

const PokeInfos = () => {
  const { pathname } = useLocation();
  const name = getLastSegment(pathname);

  return (
    <p>
      POKEINFOS - {pathname} - {name}
    </p>
  );
};

export default PokeInfos;
