import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To get the event ID from the URL
import { getOneEvent } from '../../Services/EventsServices';
import axios from "axios";



const SingleEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const eventData = await getOneEvent(id);
        setEvent(eventData);
      } catch (error) {
        console.error("Error fetching event data:", error);
      } finally {
        setLoading(false);
      }

    };
    fetchEventData();
  }, [id]);


  if (loading) return <p>Cargando evento...</p>;
  if (!event) return <p>Evento no encontrado</p>;


  return (
    
    <div>
      <h2>{event?.name}</h2>
      
      <div className="artist-list">
        <button></button>
        
           
          
        
      </div>

     
      
    </div>
  );
};

export default SingleEvent;