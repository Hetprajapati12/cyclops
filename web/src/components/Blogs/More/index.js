import React, {useEffect, useRef, useState} from 'react';
import styles from './styles.module.css';
import {Row, Col, Button, ConfigProvider} from 'antd'

const More = () => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const top = elementRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                setIsVisible(top < windowHeight);
            }
        };

        // Initial check when component mounts
        handleScroll();

        // Event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <center ref={elementRef} style={{opacity: 0}} className={isVisible ? styles.command : ''}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#fe8801',
                    },
                }}
            >
                <Button
                    href={"/docs/installation/install/manifest"}
                    type="primary"
                    shape="round"
                    size={"large"}
                    style={{
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        marginLeft: "10px",
                        marginRight: "5px",
                    }}
                >
                    <h2 style={{margin: 0}}>
                        More blogs
                    </h2>
                </Button>
            </ConfigProvider>
        </center>
    );
}

export default More;
