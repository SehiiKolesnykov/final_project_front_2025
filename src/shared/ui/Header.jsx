import { NavLink } from "react-router-dom";
import React,{useEffect,useState} from "react";
import MainLogoSvg from '../../image/WiDi.svg?react'
import MenuLogo from '../../image/menu.svg?react'
import PostLogo from '../../image/posts.svg?react'
import FavsLogo from '../../image/favorite.svg?react'
import LogOut from '../../image/logout.svg?react'
import SearchLogo from '../../image/search.svg?react'
import HomeLogo from '../../image/home.svg?react'
import ProfileLogo from '../../image/profile.svg?react'
import NotificationLogo from '../../image/notifications.svg?react'
import CircleNotif from '../../image/circle.svg?react'
import { useMediaQuery } from "./UseMedia";
import{
  Heder,
  HeaderWrapper,
  MenuWrapper,
  LogoWrapper,
  Title

} from './HeaderStyled'
export default function Header() {
  const [isShow, setShowMenu] = useState(false)
  const [posts, setPosts] = useState([])
  useEffect(() => {
         fetch('../../../public/notications.json')
             .then((res) => res.json())
             .then((data) => setPosts(data));
 
     }, [])
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  function showBurgerMenu() {
    setShowMenu(!isShow)
  }
  
  return (
    <>
      {isMobile && (
        <Heder>
          <HeaderWrapper>
            <LogoWrapper>
              <MainLogoSvg />
              <Title>WiDi</Title>
            </LogoWrapper>
            <MenuLogo onClick={showBurgerMenu} />
            {isShow && (
              <MenuWrapper>
                <NavLink to='/'>
                  <HomeLogo />
                  Home Page
                </NavLink>
                <NavLink to='/users/:id/profile'>
                  <ProfileLogo />
                  Profile
                </NavLink>
                <NavLink to='/users/:id/search'>
                  <SearchLogo />
                  Search
                </NavLink>
                <NavLink to='/users/:id/posts'>
                  <PostLogo />
                  Posts
                </NavLink>
                <NavLink to='/users/:id/favorite'>
                  <FavsLogo />
                  Favorite
                </NavLink>
                <NavLink to='/users/:id/notifications'>
                  {(posts.length >= 1 &&
                    (
                      <>
                        <CircleNotif />
                        <NotificationLogo />
                      </>
                    )
                  )}
                  {(posts.length === 0 && (
                    <NotificationLogo/>
                  ))}
                  Notifications
                </NavLink>
                <NavLink to='/users/:id/logout'>
                  <LogOut />
                  LogOut
                </NavLink>
              </MenuWrapper>
            )}
          </HeaderWrapper>
        </Heder>


      )}
      {isTablet && (
        <Heder>
          <HeaderWrapper>
            <LogoWrapper>
              <MainLogoSvg />
              <Title>WiDi</Title>
            </LogoWrapper>
            <MenuWrapper>
              <NavLink to='/'>
                <HomeLogo />
                Home Page
              </NavLink>
              <NavLink to='/users/:id/profile'>
                <ProfileLogo />
                Profile
              </NavLink>
              <NavLink to='/users/:id/search'>
                <SearchLogo />
                Search
              </NavLink>
              <NavLink to='/users/:id/posts'>
                <PostLogo />
                Posts
              </NavLink>
              <NavLink to='/users/:id/favorite'>
                <FavsLogo />
                Favorite
              </NavLink>
              <NavLink to='/users/:id/notifications'>
                  {(posts.length >= 1 &&
                    (
                      <>
                        <CircleNotif />
                        <NotificationLogo />
                      </>
                    )
                  )}
                  {(posts.length === 0 && (
                    <NotificationLogo/>
                  ))}
                  Notifications
                </NavLink>
              <NavLink to='/users/:id/logout'>
                <LogOut />
                LogOut
              </NavLink>
            </MenuWrapper>
          </HeaderWrapper>
        </Heder>


      )}
      {isDesktop && (
        <Heder>
          <HeaderWrapper>
            <LogoWrapper>
              <MainLogoSvg />
              <Title>WiDi</Title>
            </LogoWrapper>
            <MenuWrapper>
              <NavLink to='/'>
                <HomeLogo />
                Home Page
              </NavLink>
              <NavLink to='/users/:id/profile'>
                <ProfileLogo />
                Profile
              </NavLink>
              <NavLink to='/users/:id/search'>
                <SearchLogo />
                Search
              </NavLink>
              <NavLink to='/users/:id/posts'>
                <PostLogo />
                Posts
              </NavLink>
              <NavLink to='/users/:id/favorite'>
                <FavsLogo />
                Favorite
              </NavLink>
             <NavLink to='/users/:id/notifications'>
                  {(posts.length >= 1 &&
                    (
                      <>
                        <CircleNotif />
                        <NotificationLogo />
                      </>
                    )
                  )}
                  {(posts.length === 0 && (
                    <NotificationLogo/>
                  ))}
                  Notifications
                </NavLink>
              <NavLink to='/users/:id/logout'>
                <LogOut />
                LogOut
              </NavLink>
            </MenuWrapper>
          </HeaderWrapper>
        </Heder>
      )}

    </>
  );
}
