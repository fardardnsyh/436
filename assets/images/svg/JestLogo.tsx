const JestLogo = ({ dark }) => (
    <svg
        width="80"
        height="80"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_144_128)">
            <path
                d="M229.688 0H70.3125C31.48 0 0 31.48 0 70.3125V229.688C0 268.52 31.48 300 70.3125 300H229.688C268.52 300 300 268.52 300 229.688V70.3125C300 31.48 268.52 0 229.688 0Z"
                fill={dark ? '#0a0a08' : '#f5f5f7'}
            />
            <path
                d="M232.706 148.783C232.706 137.192 224.738 127.441 214.04 124.655L238 54H119.258L143.274 124.878C132.909 127.887 125.276 137.471 125.276 148.838C125.276 157.196 129.454 164.607 135.807 169.176C133.3 172.742 130.402 176.03 127.114 179.15C120.929 184.945 114.076 189.403 106.665 192.356C99.9779 187.843 97.0804 179.875 99.6998 172.742C109.896 169.622 117.307 160.094 117.307 148.893C117.307 135.13 106.108 123.986 92.3998 123.986C78.6368 123.986 67.4375 135.186 67.4375 148.949C67.4375 155.747 70.2233 161.988 74.6808 166.446C74.291 167.226 73.9013 168.006 73.5106 168.842C69.7768 176.532 65.5427 185.224 63.926 194.975C60.6946 214.478 65.9882 230.135 78.7484 238.995C85.9369 243.954 93.849 246.462 102.374 246.462C117.029 246.462 131.906 239.107 146.282 231.974C156.536 226.904 167.122 221.61 177.542 219.047C181.387 218.1 185.399 217.543 189.634 216.93C198.215 215.704 207.075 214.422 215.043 209.797C224.349 204.393 230.701 195.365 232.54 185.001C233.932 177.033 232.54 169.009 228.974 161.988C231.37 158.143 232.706 153.63 232.706 148.783ZM221.841 148.783C221.841 156.527 215.545 162.824 207.799 162.824C200.054 162.824 193.758 156.527 193.758 148.783C193.758 146.275 194.426 143.879 195.596 141.817C196.052 141.031 196.574 140.285 197.157 139.588C197.714 138.92 198.383 138.307 199.106 137.75L199.162 137.694C199.608 137.359 200.11 137.025 200.611 136.69C200.611 136.69 200.667 136.69 200.667 136.634C200.89 136.524 201.113 136.356 201.335 136.245C201.391 136.245 201.447 136.189 201.503 136.189C201.726 136.077 202.004 135.967 202.283 135.855C202.561 135.743 202.84 135.632 203.062 135.52C203.118 135.52 203.174 135.464 203.23 135.464C203.453 135.409 203.675 135.298 203.899 135.242C203.954 135.242 204.066 135.186 204.122 135.186C204.4 135.13 204.623 135.075 204.901 135.019H204.957L205.793 134.852C205.849 134.852 205.96 134.852 206.016 134.796C206.239 134.796 206.462 134.741 206.685 134.741H206.964C207.242 134.741 207.521 134.685 207.855 134.685H208.579C208.803 134.685 208.969 134.685 209.192 134.741H209.304C209.749 134.796 210.195 134.852 210.641 134.963C216.993 136.301 221.841 141.984 221.841 148.783ZM134.804 65.1445H222.454L202.339 124.487C201.503 124.655 200.667 124.934 199.831 125.212L178.657 82.0282L157.427 124.934C156.592 124.655 155.699 124.487 154.808 124.321L134.804 65.1445ZM174.644 143.935C173.586 138.697 170.912 134.016 167.122 130.561L178.657 107.27L190.302 131.063C186.847 134.517 184.341 138.92 183.337 143.935H174.644ZM146.729 135.13C147.007 135.075 147.23 135.019 147.508 134.963H147.676C147.899 134.907 148.121 134.907 148.345 134.852H148.567C148.79 134.852 148.958 134.796 149.18 134.796H151.354C151.576 134.796 151.743 134.852 151.911 134.852C152.022 134.852 152.077 134.852 152.189 134.907C152.412 134.963 152.58 134.963 152.802 135.019C152.858 135.019 152.914 135.019 153.025 135.075C153.303 135.13 153.582 135.186 153.805 135.242H153.861C154.084 135.298 154.307 135.354 154.529 135.464C154.585 135.464 154.641 135.52 154.753 135.52C154.92 135.576 155.142 135.632 155.31 135.743C155.366 135.743 155.421 135.799 155.477 135.799C155.699 135.911 155.923 135.967 156.145 136.077H156.201C156.48 136.189 156.702 136.301 156.925 136.468H156.981C157.205 136.58 157.427 136.746 157.65 136.858C157.706 136.858 157.706 136.914 157.762 136.914C157.984 137.025 158.151 137.192 158.375 137.303L158.43 137.359C159.098 137.86 159.711 138.418 160.324 138.975L160.38 139.031C160.937 139.644 161.495 140.312 161.94 141.037C163.435 143.323 164.229 145.996 164.225 148.727C164.225 156.472 157.928 162.768 150.184 162.768C142.438 162.768 136.142 156.472 136.142 148.727C136.086 142.207 140.599 136.69 146.729 135.13ZM91.8984 134.741C99.644 134.741 105.94 141.037 105.94 148.783C105.94 156.527 99.644 162.824 91.8984 162.824C84.1537 162.824 77.8564 156.527 77.8564 148.783C77.8564 141.037 84.1537 134.741 91.8984 134.741ZM221.507 183.051C220.281 190.183 215.878 196.424 209.415 200.158C203.341 203.668 195.875 204.782 188.018 205.897C183.728 206.51 179.214 207.179 174.868 208.237C163.278 211.079 152.133 216.651 141.324 222C127.505 228.854 114.465 235.317 102.374 235.317C96.0777 235.317 90.4501 233.534 85.1006 229.801C72.8418 221.331 73.4548 205.451 74.904 196.759C76.2416 188.623 79.9744 180.989 83.5407 173.69C83.763 173.244 83.9305 172.854 84.1537 172.408C85.4018 172.86 86.6887 173.195 87.9982 173.411C85.8811 185.224 91.8984 197.427 103.6 203.445L105.717 204.559L108.002 203.724C117.754 200.269 126.78 194.641 134.748 187.118C139.262 182.884 143.107 178.315 146.338 173.355C147.62 173.579 148.902 173.634 150.184 173.634C161.774 173.634 171.525 165.665 174.311 154.967H183.672C186.458 165.721 196.209 173.634 207.799 173.634C212.424 173.634 216.715 172.353 220.393 170.18C221.841 174.358 222.286 178.705 221.507 183.051Z"
                fill="#99424F"
            />
        </g>
        <defs>
            <clipPath id="clip0_144_128">
                <rect width="300" height="300" rx="150" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export default JestLogo;
