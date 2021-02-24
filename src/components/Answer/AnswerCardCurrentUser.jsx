import React, { useState, useEffect } from 'react';

const AnswerCardCurrentUser = (dataProps) => {
  const { user } = dataProps;
  const [imageSrc, setImageSrc] = useState(null);
  const pathApi = `https://api.github.com/users/${user}`;
  const urlPathApi = new URL(pathApi);

  // получение ссылки на аватар
  useEffect(() => {
    const query = async () => {
      try {
        const respose = await fetch(urlPathApi);
        if (respose.ok) {
          const data = await respose.json();
          setImageSrc(data.avatar_url);
        } else {
          setImageSrc(null);
        }
      } catch (_err) {
        setImageSrc(null);
      }
    };
    query();
  }, [user]);

  return (
    <div className="card col-12 border-0">
      <div className="card-body fullHeight">
        <h4 className="card-title mt-3">Current user</h4>
        <h5 className="card-subtitle mb-2">{user}</h5>
        {(imageSrc !== null) && <img className="card-img-top" src={imageSrc} alt="Not found foto" />}
      </div>
    </div>
  );
};

export default AnswerCardCurrentUser;
