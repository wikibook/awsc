import { useRouter } from "blitz";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as React from "react";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const MainListItems = () => {
  const router = useRouter();

  return (
    <div>
      <ListItem button onClick={() => router.push("/top")}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="아이템 목록" />
      </ListItem>
      <ListItem button onClick={() => router.push("/favorite")}>
        <ListItemIcon>
          <FavoriteIcon />
        </ListItemIcon>
        <ListItemText primary="찜" />
      </ListItem>
    </div>
  );
};
