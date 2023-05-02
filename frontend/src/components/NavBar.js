//Pages
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
//style
import { shades } from "../../theme";




function NavBar (){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <header>
            <nav>
            <ul>
                <li>Page One</li>
                <li>Page Two</li>
                <li>Page Three</li>
            </ul>
            </nav>
        </header>
    )
}

export default NavBar;
