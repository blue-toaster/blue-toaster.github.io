/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'

const Index: NextPage = () => {
  return (
    <>
      <div className='justify-center items-center flex middle text-center'>
        <div className='lg:grid lg:text-center lg:relative text-center'>
          <img
            className='rounded-full mx-auto'
            src='https://cdn.discordapp.com/avatars/609269728455688193/5c7b47cee8ebaac9304ef4d622b98e20.jpeg?size=256'
            alt='Profile Picture'
            draggable='false'
          />

          <h1>Raven0</h1>
          <strong>
              <h2 className='tagline pt-2'>Moderation for your Server</h2>
          </strong>
          <div className='flex space-x-3 p-3 mx-auto'>
            <a
              className='btn-round-outline-dark'
              href='https://discord.com/oauth2/authorize?client_id=609269728455688193&permissions=1099780155414&scope=bot'
            >
              Invite Now!
            </a>
            <a
              className='btn-round-outline-dark'
              href='https://github.com/blue-toaster/raven'
            >
              Github Repo
            </a>
          </div>
        </div>
      </div>

      <div style={{ bottom: 0, left: 0 }}>
        <p className='text-center' style={{ fontSize: ' 1.2rem' }}>
          Copyright &copy; 2022 - Present |
          <a href='https://github.com/ArtieFuzzz'> ArtieFuzzz </a> | (
          <a href='https://www.pixiv.net/en/artworks/79795196'>
            Background Source
          </a>
          )
        </p>
      </div>
    </>
  )
}

export default Index
