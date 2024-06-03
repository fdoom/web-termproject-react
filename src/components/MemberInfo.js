import React, { useEffect, useState } from 'react';
import { getMemberInfo } from '../api/api.js';

const MemberInfo = () => {
    const [id, setId] = useState(null);
  
    useEffect(() => {
      const fetchMemberInfo = async () => {
        try {
          const response = await getMemberInfo();
          setId(response.data.data);
        } catch (error) {
          console.error('사용자 정보 가져오기 실패:', error);
        }
      };
  
      fetchMemberInfo();
    }, []);
  
    if (id === null) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h2>사용자 정보</h2>
        <p>사용자 고유 ID: {id}</p>
      </div>
    );
  };
  
  export default MemberInfo;