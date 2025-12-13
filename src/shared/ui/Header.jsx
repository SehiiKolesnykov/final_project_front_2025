import { NavLink } from "react-router-dom";
import React,{useEffect,useState} from "react";
import styled from "styled-components";
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
  const Header = styled.header`
  position:sticky;
  top: 0;
  z-index: 1000;
  background: #000;
  a{
  text-decoration: none;
  color: #fff;
  border: 1px solid #000;
  background: #000;
  border-radius: 10px;
  display:flex;
  align-items:center;
  padding:10px;
  }
  `
  const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 15px;
  `
  const MenuWrapper = styled.div`
  display:flex;
  flex-direction:column;
  position:absolute;
  top:50px;
  right:10px;
  gap:5px;
  @media(min-width:769px){
  flex-direction:row;
  position:static;
  }
  `
  const LogoWrapper = styled.div`
  display: flex;
  align-items:center;
  gap: 10px;
  `
  const Title = styled.h1`
  color: #fff;
  font-size: 20px;
  
  `
  return (
    <>
      {isMobile && (
        <Header>
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
        </Header>


      )}
      {isTablet && (
        <Header>
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
        </Header>


      )}
      {isDesktop && (
        <Header>
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
        </Header>
      )}

    </>
  );
}
